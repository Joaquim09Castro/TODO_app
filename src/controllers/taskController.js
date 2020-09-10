const todoAppPageLoad = require('../views/template_todo_app');
const db = require('../config/database/database');
const TasksDao = require('../models/Tasks-DAO');

const taskController = (req, resp) => {

  const taskDao = new TasksDao(db);
  
  taskDao.list()
    .then(tasks => {
      resp.send(todoAppPageLoad(tasks));
    })
    .catch(err => console.log(err));
}

module.exports = taskController;