const todoAppPageLoad = require('../views/todo_app-template');
const TaskDao = require('../../config/DAO/Tasks-DAO');

class TaskController {
  static homeTasks() {
    return (req, resp) => {
      const QUERY = `
        SELECT
          tas.id,
          tas.titulo,
          tas.descricao,
          tas.status,
          stt.status_name
        FROM
          tarefas as tas
        INNER JOIN
          status as stt
        ON
          stt.id = tas.status;`;

      TaskDao.list(QUERY)
        .then(tasks => {
          if(tasks.rows.length > 0) {
            resp.send(todoAppPageLoad(tasks.rows));
          } else {
            resp.send(todoAppPageLoad());
          }
        })
        .catch(err => console.log(err));
    }
  }

  static createNewTask() {
    return (req, resp) => {
      const {
        title,
        desc
      } = req.body;
      const QUERY = {
        text: `
          INSERT INTO
            tarefas (titulo,descricao)
          VALUES
            ( $1 , $2 );`,
        values: [ title , desc ]
      };

      TaskDao.post(QUERY)
      .then( respMsg => {
        console.log(respMsg);
        resp.redirect('/');
      })
      .catch(err => console.log(err));
      
    }
  }

  static updateTask() {
    return (req,resp) => {
      const {
        title,
        desc,
        taskStatus,
        currStatus,
        taskId
      } = req.body;
      const QUERY = {
        text: `
        UPDATE 
          tarefas
        SET
          titulo = $1,
          descricao = $2,
          status = $3
        WHERE
          id = $4`,
        values: [ title , desc , taskStatus , taskId ]
      };
      TaskDao.update(QUERY, currStatus)
        .then( respMsg => {
          console.log(respMsg);
          resp.redirect('/');
        })
        .catch(err => console.log(err));
    }
  }

  static deleteTask() {
    return (req,resp) => {
      const { id } = req.params;
      const QUERY = {
        text: `
        DELETE FROM
          tarefas
        WHERE
          id = $1`,
        values: [ id ]
      };
      TaskDao.delete(QUERY)
        .then(respMsg => {
          resp.send(respMsg);
        })
        .catch(err => console.log(err))
    }
  }
}

module.exports = TaskController;
