const Web3 = require('web3');
const Tx = require('ethereumjs-tx');

module.exports = {
    web3: {},
    config: {
        serverURL: 'ws://127.0.0.1:8546',
        contracts: {}
    },
    invoke: async function (contract, method, params, sender) {
        try {
            // Contract information.
            var _contract = this.config.contracts[contract];
            // Invalid address or zero address.
            if (!Web3.utils.isAddress(_contract.address) || _contract.address === "0x0000000000000000000000000000000000000000") {
                throw "invalid contract address.";
            }
            // Invalid contract abi.
            if (_contract.abi === undefined || _contract.abi === []) {
                throw "contract not found.";
            }
            // The contract method invoked.
            var _method;
            for (var i in _contract.abi) {
                if (method === _contract.abi[i]["name"]) {
                    _method = _contract.abi[i];
                    break;
                }
            }
            // Invalid contract method.
            if (_method === undefined || _method === "") {
                throw "method not found.";
            }
            // web3 client of ethereum.
            this.web3 = new Web3(Web3.givenProvider || this.config.serverURL);
            // encodeABI.
            var _params = [];
            for (var i in _method.inputs) {
                _params.push();
                if (_method.inputs[i].type.indexOf("bytes") >= 0) {
                    _params.push(this.web3.utils.toHex(params[i]));
                } else {
                    _params.push(params[i]);
                }
            }
            var data = await this.web3.eth.abi.encodeFunctionCall(_method, _params);
            /**
             * call
             */
            if (_method.constant) {
                await this.web3.eth.call({from: sender, to: _contract.address, data: data}).then(function (data) {
                    var returnType = [];
                    for (var i in _method.outputs) {
                        returnType.push(_method.outputs[i].type);
                    }
                    return web3.eth.abi.decodeParameters(returnType, data);
                });
            }
            /**
             * send
             */
            else {
                //send
                var _account = await this.web3.eth.accounts.privateKeyToAccount('0x' + sender);
                var _privateKey = new Buffer(sender, 'hex')
                var gasPrice = await this.web3.eth.getGasPrice();
                var nonce = await this.web3.eth.getTransactionCount(_account.address);
                var chainId = await this.web3.eth.net.getId();
                var rawTx = {
                    nonce: nonce,
                    gasPrice: gasPrice,
                    to: _contract.address,
                    data: data,
                    chainId: chainId
                }
                var gasLimit = await this.web3.eth.estimateGas(rawTx);
                rawTx.gasLimit = gasLimit;
                var tx = new Tx(rawTx);
                tx.sign(_privateKey);
                var serializedTx = tx.serialize();
                var _hash;
                await this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('transactionHash', function (hash) {
                    _hash = hash;
                });
                return _hash;
            }
        } catch (err) {
            console.log(err);
        }
    }
}
