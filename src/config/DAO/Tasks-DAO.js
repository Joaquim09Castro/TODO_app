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
      this.db.run(`
        UPDATE 
          tarefas
        SET
          titulo = ?
          descricao = ?
          status = ?
        WHERE
          id = ?`,
        [ newData.titulo,
          newData.desc,
          newData.status,
          newData.id],
          err => {
            if (err) {
              return reject(err)
            }

            return resolve('Data Updated');
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