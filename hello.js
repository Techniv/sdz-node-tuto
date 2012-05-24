/**
 * hello.js
 * @author Techniv <vpeybernes.pro@gmail.com>
 * 
 * Pour le Site du Zéro <siteduzero.com>
 */
 
 console.log('Hello World!');
 
 var http = require('http');
 var server = http.createServer(function(req, res){
	console.log('Un zéro demande l\'adresse "'+req.url+'"');
	res.write("Hello World!");
	res.end();
 });
 
 server.listen(80);
 