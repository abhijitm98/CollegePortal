var express=require('express');
var bodyparser=require('body-parser');
var path=require('path');
var pool=require('mysql'); 
const dotenv = require('dotenv');
var config = dotenv.config({ path: './config.env' });
console.log(process.env.DB_HOST);
console.log(process.env.DB_PASSWORD);

var app = express();
var cred={
    user:process.env.USER,
    database:process.env.DATABASE,
    host:"localhost",
    port: '3306',
    password:process.env.DB_PASSWORD,
}
pool.createConnection(cred);

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'','login2.html'));
});
app.get('/css/style2.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'css', 'style2.css'));
});
app.get('/img/iemlogo.png', function (req, res) {
    res.sendFile(path.join(__dirname, 'img', 'iemlogo.png'));
});
app.get('/img/login1.png', function (req, res) {
    res.sendFile(path.join(__dirname, 'img', 'login1.png'));
});


//App listening
app.listen(3000, function(){
    console.log("App listening on port 3000...");

});