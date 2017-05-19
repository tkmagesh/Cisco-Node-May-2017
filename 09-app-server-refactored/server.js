var http = require('http'),
	app = require('./app');
	

var dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	calculatorHandler = require('./calculatorHandler'),
	notFoundHandler = require('./notFoundHandler');

app.use(dataParser);
app.use(serveStatic);
app.use(calculatorHandler);
app.use(notFoundHandler);

http.createServer(app).listen(8080);