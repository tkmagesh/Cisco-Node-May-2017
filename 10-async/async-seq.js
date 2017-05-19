function f1Sync(){
	console.log('f1Sync invoked');
	console.log('f1Sync completed');
}

function f2Sync(){
	console.log('f2Sync invoked');
	console.log('f2Sync completed');
}

function f3Sync(){
	console.log('f3Sync invoked');
	console.log('f3Sync completed');
}

function f4Sync(){
	console.log('f4Sync invoked');
	console.log('f4Sync completed');
}

function runSync(){
	f1Sync();
	f2Sync();
	f3Sync();
	f4Sync();
}

function f1Async(){
	console.log('f1Async invoked');
	setTimeout(function(){
		console.log('f1Async completed');
	}, 3000);
}

function f2Async(){
	console.log('f2Async invoked');
	setTimeout(function(){
		console.log('f2Async completed');
	}, 3000);
}

function f3Async(){
	console.log('f3Async invoked');
	setTimeout(function(){
		console.log('f3Async completed');
	}, 3000);
}

function f4Async(){
	console.log('f4Async invoked');
	setTimeout(function(){
		console.log('f4Async completed');
	}, 3000);
}

function runAsync(){
	f1Async();
	f2Async();
	f3Async();
	f4Async();
}


module.exports = {
	runSync : runSync,
	runAsync : runAsync
};