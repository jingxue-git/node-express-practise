var express = require('express');
var path = require('path');
var router = require('./router.js');

var app = express();

app.engine('html',require('express-art-template'));

app.use('/public/',express.static(path.join(__dirname,'./public/')));
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')));

app.use(router);

app.listen(3000,function(){
	console.log('server is running....');
});