const client = require('../index');
client.config.serverURL = "ws://47.254.32.219:18548";
client.config.contracts = require('../conf/contracts');

// call Token [name,totalSupply,symbol,decimals]
client.invoke('Token','name',[],"0xc66cd3deec506713d653681c7663f2c4fe96fb3f").then(function(data){
    console.log(data);
});

// call Token [balanceOf,allowance]
client.invoke('Token','balanceOf',["0xc66cd3deec506713d653681c7663f2c4fe96fb3f"],"0xc66cd3deec506713d653681c7663f2c4fe96fb3f").then(function(data){
    console.log(data);
});

// call XCP [publicKeys]
client.invoke('XCP', 'publicKeys', ["INK"], "0xc66cd3deec506713d653681c7663f2c4fe96fb3f").then(function(data){
    console.log(data);
});

// send Token [approve]
client.invoke('Token', 'approve', ["0x2fda776c716588724765f60267f1a6614c4da89d", 1000], "605297a0025b7b6bff5b7d219e78cd4f7c4dce928e86069d64c99a47547aa1e9").then(function (data) {
    console.log(data);
    // web3 client
    client.web3.eth.getTransactionReceipt(data).then(console.log);
});
