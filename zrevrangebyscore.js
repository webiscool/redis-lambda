var redis = require('redis');
var constants = require('./constants.js');

exports.handler = (event, context) => {

  var rCli = redis.createClient(constants.redisCred);

  rCli.on('error',  (err) => console.log('Error: '+err));
  rCli.on('connect', () => {

    rCli.zrevrangebyscore([event.set, '+inf', '-inf', 'WITHSCORES'], (err, reply) => {

      //reduce method to have the next value of array as the value of current key
      var output = reply.reduce((result, item, index) => {

      if((index +1) <= reply.length / 2) {
      //0*2 = 0 then 0*2 +1 = 1
      //1*2 = 2 then 1*2 +1 = 3
      //2*2 = 4 then 2*2+1 = 5
        result[reply[index*2]] = reply[(index*2)+1];
      }
        return result;
      }, {}); //to store result in an object

      //will return a json style object instead of simple array
      context.succeed(output);
    rCli.quit();

  });
});
}
