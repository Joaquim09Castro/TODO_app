class TasksDao {
  constructor(db) {
    this._db = db;
  }

  list() {
    return new Promise((resolve,reject) => {
      this._db.all(`
        SELECT
          tas.id,
          tas.titulo,
          tas.descricao,
          stt.status_name
        FROM
          tarefas as tas
        INNER JOIN
          status as stt
        ON
          stt.id = tas.status`,
        (err,res) => {
          if (err){
            return reject('Unable to list tasks');
          }

          return resolve(res);
        }
      )
    });
  }

  post(newTask) {
    if (newTask.title == '') {
      newTask.title = 'Blank Title';
    }
    if (newTask.desc == '') {
      newTask.desc = 'Blank Description';
    }
    return new Promise((resolve,reject) => {
      this._db.run(`
        INSERT INTO
          tarefas (titulo,descricao)
        VALUES
          (?,?)`,
        [ newTask.title,
          newTask.desc],
        err => {
          if (err) {
            return reject('Unable to add task');
          }
          
          return resolve('Task added');
        }
      )
    })
  }

  update(newData) {
    return new Promise((resolve,reject) => {
      this._db.run(`
        UPDATE 
          tarefas
        SET
          titulo = ?,
          descricao = ?
        WHERE
          id = ?`,
        [ newData.title,
          newData.desc,
          newData.taskId],
          err => {
            if (err) {
              return reject(err)
            }

            return resolve('Task Updated');
          }
      )
    })
  }

  delete(taskId) {
    return new Promise((resolve,reject) => {
      this._db.run(`
        DELETE FROM tarefas
          WHERE id = ?`,
        [taskId],
        err => {
          if (err) {
            return reject('Unable to delete task');
          }

          return resolve('Task Deleted');
        }
      )
    })
  }
}

module.exports = TasksDao;