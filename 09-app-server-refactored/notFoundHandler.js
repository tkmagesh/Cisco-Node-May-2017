module.exports = function(res){
	console.log('serving 404 from notFoundHandler');
	res.statusCode =  404;
	res.end();
}