var fs = require('fs');

fs.readFile('./sample.txt', { encoding :'utf-8'}, function(err, fileContents){
	if (err){
		console.log(err);
		return;
	}
	console.log(fileContents);
	console.log('-------------------- EOF -------------------');
});

