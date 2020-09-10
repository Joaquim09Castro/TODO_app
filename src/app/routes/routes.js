// const todoAppPageLoad = require('../views/template_todo_app');
// const db = require('../config/database/database');
// const TasksDao = require('../models/Tasks-DAO');
const taskController = require('../controllers/taskController');

// PATH exports
module.exports = (app) => {
  // Home page
  app.get('/', taskController)

  // nodemon test page
  app.post('/nodemon', (req, resp) => {
    resp.send('<h1>Rota testada utilizando nodemon</h1>')
  })
};