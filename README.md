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

invoke method.
```
/**
 * @param contract : contract name[string].
 * @param method : contract method name[string].
 * @param contract : method params [array].
 * @param contract : contract method caller[string],The sender is public key when the method type is called;The sender is private key when the method type is send.
 */
invoke: async function (contract, method, params, sender)
```

call contract.
```
// call Token [name]
client.invoke('Token','name',[],"0xc66cd3deec506713d653681c7663f2c4fe96fb3f").then(function(data){
    console.log(data);
});
```

send contract.
```
// send Token [approve]
client.invoke('Token', 'approve', ["0x2fda776c716588724765f60267f1a6614c4da89d", 1000], "605297a0025b7b6bff5b7d219e78cd4f7c4dce928e86069d64c99a47547aa1e9").then(function (data) {
    console.log(data);
    // web3 client
    client.web3.eth.getTransactionReceipt(data).then(console.log);
});
```
