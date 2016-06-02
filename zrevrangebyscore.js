var redis = require('redis');
var constants = require('./constants.js');

exports.handler = (event, context) => {

  var rCli = redis.createClient(constants.redisCred);
  
  rCli.on('error',  (err) => console.log('Error: '+err));
  rCli.on('connect', () => {

    rCli.zrevrangebyscore([event.set, '+inf', '-inf', 'WITHSCORES'], (err, reply) => {
      context.succeed(reply);
    });

    rCli.quit();
  });

}
