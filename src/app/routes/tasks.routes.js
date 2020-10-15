const TaskController = require('../controllers/TaskController');
// PATH exports
module.exports = (app) => {
  // Home page
  app.get('/', TaskController.homeTasks());
  
  // New task
  app.post('/addTask', TaskController.createNewTask());

  app.put('/editTask', TaskController.updateTask());

  // Delete Task
  app.delete('/deleteTask/:id', TaskController.deleteTask());
};