var path = require('path'),
	fs = require('fs');

var staticResExtns = ['.html', '.css', '.js', '.txt', '.png', '.ico', '.xml', '.json'];
function isStatic(resource){
	return staticResExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res, next){
	if (isStatic(req.urlObj.pathname)){
		var resource = path.join(__dirname, req.urlObj.pathname);
		if (!fs.existsSync(resource)){	
			res.statusCode = 404;
			res.end();
			return;
		}
		console.log(resource + ' - exists');
		var stream = fs.createReadStream(resource);
		//stream.pipe(res);
		stream.on('open', function(){
			console.log('stream opened for reading file');
		})
		stream.on('data', function(chunk){
			console.log('one chunk of data written to the response stream');
			res.write(chunk);
		});
		stream.on('end', function(){
			console.log('writing file to the response stream done');
			next();
		});
	} else {
		next();
	}
}