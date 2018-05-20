const client = require('../index');
client.config.serverURL = "https://rinkeby.infura.io/B4rowWld8aRhqdqUUcKF";
client.config.dev = true;

// transfer
client.transfer({
    to: "0x7ebef78f23fe5cac4d5c5d7ad76008129fa5bfd8",
    value: 1,
    sender: '0x605297a0025b7b6bff5b7d219e78cd4f7c4dce928e86069d64c99a47547aa1e9',
    gasLimit: 60000,
    id: 'transfer001'
}).then(function (data) {
    console.log(data);
});
