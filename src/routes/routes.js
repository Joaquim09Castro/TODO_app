// app view import
const todoAppPageLoad = require('../views/template_todo_app');
const db = require('../config/database/database');  
const TaskDao = require('../models/Tasks-DAO');
const TasksDao = require('../models/Tasks-DAO');

// PATH exports
module.exports = (app) => {
  // Home page
  app.get('/', (req, resp) => {

    const taskDao = new TasksDao(db);
    
    taskDao.list()
      .then(tasks => {
        resp.send(todoAppPageLoad(tasks));
      })
      .catch(err => console.log(err));
  })

  // nodemon test page
  app.post('/nodemon', (req, resp) => {
    resp.send('<h1>Rota testada utilizando nodemon</h1>')
  })
};