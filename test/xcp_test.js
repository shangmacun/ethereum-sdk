const client = require('../index');
client.config.serverURL = "ws://47.254.32.219:18548";
client.config.contracts = require('../conf/contracts');
// client.config.dev = true;

// call
client.invoke({
    contract: 'XCP',
    method: 'publicKeys',
    params: ["INK"],
    sender: '0xc66cd3deec506713d653681c7663f2c4fe96fb3f'
}).then(function (data) {
    console.log(data);
});
