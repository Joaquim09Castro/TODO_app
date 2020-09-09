class TasksDao {
  constructor(db) {
    this._db = db;
  }

  list() {
    return new Promise((resolve,reject) => {
      this._db.all(
        'SELECT * FROM tarefas',
        (err,res) => {
          if (err)
            return reject('Unable to list tasks');

          return resolve(res);
        }
      )
    });
  }
}

module.exports = TasksDao;