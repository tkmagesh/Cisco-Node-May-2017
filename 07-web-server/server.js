var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url');

var server = http.createServer(function(req, res){
	var urlObj = url.parse(req.url);
	var resource = path.join(__dirname, urlObj.pathname);
	if (!fs.existsSync(resource)){
		res.statusCode = 404;
		res.end();
		return;
	}
	var stream = fs.createReadStream(resource);
	stream.pipe(res);
});

server.listen(8080);