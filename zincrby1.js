var redis = require('redis');
var constants = require('./constants.js');

exports.handler = (event, context) => {

  var rCli = redis.createClient(constants.redisCred);

  rCli.on('error',  (err) => console.log('Error: '+err));
  rCli.on('connect', () => {
    rCli.zincrby(event.set, 1, event.value, (err, reply) => {
      context.succeed(reply); // should output current number after incrementation
    });

    rCli.quit();
  });

}
