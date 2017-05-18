var fs = require('fs');

var fileContents = fs.readFileSync('./sample.txt', { encoding :'utf-8'});

console.log(fileContents);