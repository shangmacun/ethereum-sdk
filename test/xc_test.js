const client = require('../index');
client.config.serverURL = "https://rinkeby.infura.io/B4rowWld8aRhqdqUUcKF";
client.config.contracts = require('../conf/contracts');
// client.config.dev = true;

// call
client.invoke({
    contract: 'XC',
    method: 'lockBalance',
    params: [],
    sender: '0xc66cd3deec506713d653681c7663f2c4fe96fb3f'
}).then(function (data) {
    console.log(data);
});
