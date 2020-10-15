const db = require('../database/database');

class TasksDao {

  static list(query) {
    return db.query(query);
  }

  static post(query) {
    if (query.values[0] == '') {
      query.values[0] = 'Blank Title';
    }
    if (query.values[1] == '') {
      query.values[1] = 'Blank Description';
    }
    return db.query(query);
  }

  static update(query, status) {
    if (!query.values[2]) {
      query.values[2] = status;
    }
    return db.query(query);
  }

  static delete(query) {
    return db.query(query);
  }
}

module.exports = TasksDao;