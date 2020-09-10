const todoAppPageLoad = require('../views/template_todo_app');
const db = require('../../config/database/database');
const TasksDao = require('../DAO/Tasks-DAO');

const taskController = (req, resp) => {

  const taskDao = new TasksDao(db);
  
  taskDao.list()
    .then(tasks => {
      if(tasks.length > 0) {
        resp.send(todoAppPageLoad(tasks));
      } else {
        resp.send(todoAppPageLoad());
      }
    })
    .catch(err => console.log(err));
}

module.exports = taskController;