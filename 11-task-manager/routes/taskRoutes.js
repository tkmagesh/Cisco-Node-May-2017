var express = require('express');
var router = express.Router();

var taskList = [
	{id : 1, name : 'Watch Bahubali 2', isCompleted : true},
	{id : 2, name : 'Watch Baby Boss', isCompleted : false},
	{id : 3, name : 'Fix that bug', isCompleted : false},
];


/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('All tasks will be displayed here');

  var viewModel = {list : taskList};
  res.render('tasks/index', viewModel);
});

router.get('/new', function(req, res, next){
	res.render('tasks/new');
});

router.post('/new', function(req, res, next){
	var newTaskName = req.body.taskName;
	var newTask = {
		id : taskList.length + 1,
		name : newTaskName,
		isCompleted : false
	};
	taskList.push(newTask);
	res.redirect('/tasks');
});

router.get('/api', function(req, res, next){
	var viewModel = {list : taskList};
	res.json(viewModel);
});

router.get('/api/:id', function(req, res, next){
	var task = taskList.filter(function(t){
		return t.id.toString() === req.params.id;
	})[0];
	var viewModel = {task : task};
	res.json(viewModel);
});

module.exports = router;
