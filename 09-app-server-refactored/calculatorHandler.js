var querystring = require('querystring'),
	calculator = require('./calculator');
	
module.exports = function(req, res, next){
	if (req.urlObj.pathname === '/calculator'){
		var data = req.method === 'POST' ? req.body : req.query,
			operation = data.op,
			n1 = parseInt(data.n1, 10),
			n2 = parseInt(data.n2, 10);
		var result = calculator[operation](n1, n2);
		res.write(result.toString());
		res.end();
		next();
	} else {
		next();
	}
}