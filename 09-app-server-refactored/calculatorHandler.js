var querystring = require('querystring'),
	calculator = require('./calculator');
	
module.exports = function(req, res, next){
	if (req.urlObj.pathname === '/calculator' && req.method === 'GET'){
		var data = req.query,
			operation = data.op,
			n1 = parseInt(data.n1, 10),
			n2 = parseInt(data.n2, 10);
		var result = calculator[operation](n1, n2);
		res.write(result.toString());
		res.end();
		next();
	} else if (req.urlObj.pathname === '/calculator' && req.method === 'POST'){
		var rawData = '';
		req.on('data', function(chunk){
			rawData += chunk;
		});
		req.on('end', function(){
			var data = querystring.parse(rawData);
			var operation = data.op,
				n1 = parseInt(data.n1, 10),
				n2 = parseInt(data.n2, 10);
			var result = calculator[operation](n1, n2);
			res.write(result.toString());
			res.end();
			next();
		});
	} else {
		next();
	}
}