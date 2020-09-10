// const todoAppPageLoad = require('../views/template_todo_app');
// const TasksDao = require('../models/Tasks-DAO');
const db = require('../../config/database/database');
const TaskController = require('../controllers/TaskController');

const taskController = new TaskController(db)
// PATH exports
module.exports = (app) => {
  // Home page
  app.get('/', taskController.homeTasks())

  // nodemon test page
  app.post('/nodemon', (req, resp) => {
    resp.send('<h1>Rota testada utilizando nodemon</h1>')
  })
};