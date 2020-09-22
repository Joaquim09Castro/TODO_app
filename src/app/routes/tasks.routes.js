// const todoAppPageLoad = require('../views/template_todo_app');
// const TasksDao = require('../models/Tasks-DAO');
const db = require('../../config/database/database');
const TaskController = require('../controllers/TaskController');
//const staticJs = require('../public/js/index');

const taskController = new TaskController(db)
// PATH exports
module.exports = (app) => {
  // Home page
  app.get('/', taskController.homeTasks());
  
  // New task
  app.post('/addTask', taskController.createNewTask());

  app.put('/editTask', taskController.updateTask());

  // Delete Task
  app.delete('/deleteTask/:id', taskController.deleteTask());
};