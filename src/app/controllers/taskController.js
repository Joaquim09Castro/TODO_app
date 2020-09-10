const todoAppPageLoad = require('../views/template_todo_app');
const db = require('../../config/database/database');
const TasksDao = require('../../config/DAO/Tasks-DAO');

class TaskController {
  constructor(db) {

    this.taskDao = new TasksDao(db);
  }

  homeTasks() {
    return (req, resp) => {
    
      this.taskDao.list()
        .then(tasks => {
          if(tasks.length > 0) {
            resp.send(todoAppPageLoad(tasks));
          } else {
            resp.send(todoAppPageLoad());
          }
        })
        .catch(err => console.log(err));
    }
  }
}


module.exports = TaskController;