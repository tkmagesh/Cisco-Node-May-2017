var http = require('http');
	

var dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	calculatorHandler = require('./calculatorHandler'),
	notFoundHandler = require('./notFoundHandler');

var middlewares = [dataParser, serveStatic, calculatorHandler, notFoundHandler];

var server = http.createServer(function(req, res){
	function exec(middlewares, req, res){
		var first = middlewares[0],
			remaining = middlewares.slice(1),
			next = function(){
				exec(remaining, req, res);
			};
		if (typeof first === 'function')
			first(req, res, next);
	}
	exec(middlewares, req, res);
});

server.listen(8080);