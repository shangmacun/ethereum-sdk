# ethereum-sdk

## Init.

```
const client = require('/index');
client.config.serverURL = "ws://47.254.32.219:18548";
client.config.contracts = require('../conf/contracts');
```

## Config.

ethereum server url.
```
client.config.serverURL 
```

ethereum contracts config.
```
{
  "Token": {
    "address": "0x6062b12c40be844603858dd14902b35175227925",
    "abi": [{
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [{
        "name": "",
        "type": "string"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },{
        ...
    }]
  },
  ...
}
```

## Using.

### contract
invoke method.
```
/**
 * @param contract : contract name[string].
 * @param method : contract method name[string].
 * @param params : method params [array].
 * @param value : value.
 * @param gasLimit : gasLimit.
 * @param id : id.
 * @param sender : contract method caller[string],The sender is public key when the method type is called;The sender is private key when the method type is send.
 */
invoke: async function ({
    contract: 'Token',
    method: 'transferFrom',
    params: ["0xc66cd3deec506713d653681c7663f2c4fe96fb3f", "0x7ebef78f23fe5cac4d5c5d7ad76008129fa5bfd8", 5],
    gasLimit: 60000,
    value: 0,
    sender: '0xec8eab91f6dc1ddb8c9d25f03f4d7db88fa34ccc8c79abc0a15a7959da9b8a85',
    id: 10002
})
```

call contract.
```
// call Token [name]
client.invoke({
    contract: 'Token',
    method: 'name',
    sender: '0xc66cd3deec506713d653681c7663f2c4fe96fb3f'
}).then(function (data) {
    console.log(data);
});
```

send contract.
```
// send Token [approve]
client.invoke({
    contract: 'Token',
    method: 'approve',
    params:["0x7ebef78f23fe5cac4d5c5d7ad76008129fa5bfd8",999],
    gasLimit: 46000,
    sender: '605297a0025b7b6bff5b7d219e78cd4f7c4dce928e86069d64c99a47547aa1e9'
}).then(function (data) {
    console.log(data);
});
```

### transfer

transfer method
```
/**
 * @param to : to account.
 * @param value : value[wei].
 * @param gasLimit : gasLimit.
 * @param id : id.
 * @param sender : contract method caller[string],The sender is public key when the method type is called;The sender is private key when the method type is send.
 */
transfer: async function ({
    to: "0x7ebef78f23fe5cac4d5c5d7ad76008129fa5bfd8",
    value: 1,
    sender: '0x605297a0025b7b6bff5b7d219e78cd4f7c4dce928e86069d64c99a47547aa1e9',
    gasLimit: 60000,
    id: 'transfer001'
})
```

transfer 1 wei
```
client.transfer({
    to: "0x7ebef78f23fe5cac4d5c5d7ad76008129fa5bfd8",
    value: 1,
    sender: '0x605297a0025b7b6bff5b7d219e78cd4f7c4dce928e86069d64c99a47547aa1e9',
    gasLimit: 60000,
    id: 'transfer001'
}).then(function (data) {
    console.log(data);
});
```
### web3

You must initialize before use.
```
client.init();
or
client.reset();
```

gasPrice.
```
var gasPrice =  client.web3.eth.getGasPrice();
```
