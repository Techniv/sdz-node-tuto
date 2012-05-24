/**
 * zero.js
 * @author Techniv <vpeybernes.pro@gmail.com>
 * 
 * Pour le Site du Zéro <siteduzero.com>
 */


// Actions

/** Réponse par défaut */
var helloZero = function(res){
	res.writeHead(200,{
		'Content-type': 'text/plain; charset=utf-8',
	});
	res.write('Salut les Zéros');
	res.end();
}

/** Réponse html personnalisée */
var helloYou = function(res, name){
	res.writeHead(200,{
		'Content-type': 'text/html; charset=utf-8',
	});
	res.write('<!DOCTYPE html>');
	res.write('<html>');
	res.write('<head><title>Hello '+name+'</title></head>');
	res.write('<body>');
	res.write('<h1>Salut '+name+'</h1>');
	res.write('<p>Bienvenu sur ce tuto</p>');
	res.write('</body>');
	res.write('</html>');
	res.end();
}


// Serveur

var requestListener = function(req, res){
	var url = req.url;
	console.log('Requête sur "'+url+'"');
	if(/^\/hello:([a-zA-Z]+)/.test(url)){
		var name = RegExp.$1;
		helloYou(res, name);
	} else {
		helloZero(res);
	}
}

var http = require('http');
var port = 80;

http.createServer(requestListener).listen(port);
console.log("Le server Zéro écoute le port "+port);
