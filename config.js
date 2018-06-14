const dotenv= require('dotenv');
var config = dotenv.config({ path: './config.env' });
console.log(process.env.DB_HOST);
console.log(process.env.DB_PASSWORD);

 