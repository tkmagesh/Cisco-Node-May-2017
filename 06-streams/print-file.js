var fs = require('fs');

var stream = fs.createReadStream('./sample.txt', {encoding : 'utf8'});

/* open, data, end, close & error */
var readCount = 0;
stream.on('data', function(chunk){
	++readCount;
	//console.log(chunk);
});

stream.on('end', function(){
	console.log('---------------------------- EOF ------------------------------ ');
	console.log('total readCount = ', readCount);
});

stream.pipe(process.stdout);

