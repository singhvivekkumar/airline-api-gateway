const { Redis } = require("ioredis");

const client = new Redis();

module.exports = client;

// redis
// const result = await client.get("user:1");
// const result = await client.set("msg:1", "hii from api gateway");
// const result = await client.expire("msg:1", 10);
// console.log(result);
