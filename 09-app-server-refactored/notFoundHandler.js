module.exports = function(req, res, next){
	console.log('serving 404 from notFoundHandler');
	res.statusCode =  404;
	res.end();
}