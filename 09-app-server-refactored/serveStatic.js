var path = require('path'),
	fs = require('fs');

var staticResExtns = ['.html', '.css', '.js', '.txt', '.png', '.ico', '.xml', '.json'];
function isStatic(resource){
	return staticResExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function ( resourcePath ){
	return function(req, res, next){
		if (isStatic(req.urlObj.pathname)){
			var resource = path.join(resourcePath, req.urlObj.pathname);
			if (!fs.existsSync(resource)){	
				res.statusCode = 404;
				res.end();
				return;
			}
			var stream = fs.createReadStream(resource);
			stream.pipe(res);
			stream.on('end', function(){
				next();
			});
		} else {
			next();
		}
	}
};