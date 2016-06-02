#RedisLambda

> Aim of this repo is to show how simple and swift it is to set up small APIs with AWS Lambda.
>Indeed Lambda service has HTTPS endpoints you can later on call with [cUrl](https://en.wikipedia.org/wiki/CURL) or [fetch](https://github.com/github/fetch).

> One must write short portions of code to store and retrieve datas.
>Lambda propose nodeJs or Python. (We chose nodeJs)

For the persistence nodeJs requires a [redis client](https://www.npmjs.com/package/redis) to communicate with a redis server one can find for free at [redislabs](https://redislabs.com/)

###This example is good way to set up "likes counter" in web apps

1 - To store a set with a value (Will return the number of hits for the pair)

```sh
curl -X POST -d '{"set":"days", "value":"tuesday"}' https://60zhqzqvuk.execute-api.us-west-2.amazonaws.com/prod/zincrby1
```

2 - To retrieve the set infos:

```sh
curl -X POST -d '{"set":"days"}' https://60zhqzqvuk.execute-api.us-west-2.amazonaws.com/prod/zrevrangebyscore
```

[lambda setup tuto](https://github.com/dwyl/learn-aws-lambda)

[redis command info](http://redis.io/commands/zrevrangebyscore)
