/**
 * hello.js
 * @author Techniv <vpeybernes.pro@gmail.com>
 * 
 * Pour le Site du Zéro <siteduzero.com>
 */
 
console.log('Hello World!');

var http	= require('http');
var fs		= require('fs');

var logFile = fs.createWriteStream('hello.log',{flags: 'a'});

var server = http.createServer(function(req, res){
	logFile.write('Un zéro demande l\'adresse "'+req.url+'" : Je lui dit bonjour !\r\n');
	console.log('Un zéro demande l\'adresse "'+req.url+'"');
	res.write('Hello World!');
	res.end();
});

server.listen(80);
