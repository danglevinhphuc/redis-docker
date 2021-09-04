const redis = require('redis');
const redisClient = redis.createClient(6379, '127.0.0.1');
redisClient.on('error', (err) => {
    console.log('Error occured while connecting or accessing redis server');
});
if (!redisClient.get('customer_name', redis.print)) {
    //create a new record
    redisClient.set('customer_name', 'John Doe', redis.print);
    console.log('Writing Property : customer_name');
} else {
    let val = redisClient.get('customer_name', redis.print);
    console.log(`Reading property : customer_name - ${val}`);
}