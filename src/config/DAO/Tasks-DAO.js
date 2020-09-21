class TasksDao {
  constructor(db) {
    this._db = db;
  }

  list() {
    return new Promise((resolve,reject) => {
      this._db.all(
        'SELECT * FROM tarefas',
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
      this._db.run(
        `INSERT INTO tarefas
          (titulo,descricao)
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

  delete(taskId) {
    return new Promise((resolve,reject) => {
      this._db.run(
        `DELETE FROM tarefas
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