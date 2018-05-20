const client = require('../index');
client.config.serverURL = "ws://47.254.32.219:18548";
client.config.contracts = require('../conf/contracts');
// client.config.dev = true;

// call
client.invoke({
    contract: 'Token',
    method: 'name',
    sender: '0xc66cd3deec506713d653681c7663f2c4fe96fb3f'
}).then(function (data) {
    console.log(data);
});

client.invoke({
    contract: 'Token',
    method: 'symbol',
    sender: '0xc66cd3deec506713d653681c7663f2c4fe96fb3f'
}).then(function (data) {
    console.log(data);
});

client.invoke({
    contract: 'Token',
    method: 'decimals',
    sender: '0xc66cd3deec506713d653681c7663f2c4fe96fb3f'
}).then(function (data) {
    console.log(data);
});

client.invoke({
    contract: 'Token',
    method: 'totalSupply',
    sender: '0xc66cd3deec506713d653681c7663f2c4fe96fb3f'
}).then(function (data) {
    console.log(data);
});

client.invoke({
    contract: 'Token',
    method: 'balanceOf',
    params: ["0xc66cd3deec506713d653681c7663f2c4fe96fb3f"],
    sender: '0xc66cd3deec506713d653681c7663f2c4fe96fb3f'
}).then(function (data) {
    console.log(data);
});

client.invoke({
    contract: 'Token',
    method: 'allowance',
    params: ["0xc66cd3deec506713d653681c7663f2c4fe96fb3f", "0x7ebef78f23fe5cac4d5c5d7ad76008129fa5bfd8"],
    sender: '0xc66cd3deec506713d653681c7663f2c4fe96fb3f',
    id: 1001
}).then(function (data) {
    console.log(data);
});

// send
// client.invoke({
//     contract: 'Token',
//     method: 'approve',
//     params:["0x7ebef78f23fe5cac4d5c5d7ad76008129fa5bfd8",999],
//     gasLimit: 46000,
//     sender: '605297a0025b7b6bff5b7d219e78cd4f7c4dce928e86069d64c99a47547aa1e9'
// }).then(function (data) {
//     console.log(data);
// });
//
// client.invoke({
//     contract: 'Token',
//     method: 'transfer',
//     params:["0x7ebef78f23fe5cac4d5c5d7ad76008129fa5bfd8",50],
//     gasLimit: 60000,
//     sender: '0x605297a0025b7b6bff5b7d219e78cd4f7c4dce928e86069d64c99a47547aa1e9'
// }).then(function (data) {
//     console.log(data);
// });
//
// client.invoke({
//     contract: 'Token',
//     method: 'transferFrom',
//     params: ["0xc66cd3deec506713d653681c7663f2c4fe96fb3f", "0x7ebef78f23fe5cac4d5c5d7ad76008129fa5bfd8", 5],
//     gasLimit: 60000,
//     sender: '0xec8eab91f6dc1ddb8c9d25f03f4d7db88fa34ccc8c79abc0a15a7959da9b8a85',
//     id: 10002
// }).then(function (data) {
//     console.log(data);
// });
