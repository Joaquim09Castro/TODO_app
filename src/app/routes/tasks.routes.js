// const todoAppPageLoad = require('../views/template_todo_app');
// const TasksDao = require('../models/Tasks-DAO');
const db = require('../../config/database/database');
const TaskController = require('../controllers/TaskController');

const taskController = new TaskController(db)
// PATH exports
module.exports = (app) => {
  // Home page
  app.get('/', taskController.homeTasks())

  // app.post('/', (req, resp) => {
  //   resp.send()
  // })
};