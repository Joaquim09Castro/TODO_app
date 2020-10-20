const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/config/database/data.db');

// Tables
const TABLE_SCHEMA_TAREFAS = `
  CREATE TABLE IF NOT EXISTS tarefas (
    id SERIAL,
    titulo VARCHAR(50),
    descricao TEXT,
    status INTEGER DEFAULT 1,
    FOREIGN KEY(status) REFERENCES status(id)
  )
`;

const TABLE_SCHEMA_STATUS = `
    CREATE TABLE IF NOT EXISTS status (
      id INTEGER PRIMARY KEY,
      status_name VARCHAR(50)
    )
`;

// Table test data
const ADD_TASKS = `
  INSERT INTO tarefas 
    (titulo, descricao, status)
  VALUES 
    ('Dentista','Ir ao dentista dia 03/09 às 18h', 4),
    ('Yoga','Relaxar', 3),
    ('Encontrão','Encontro das turmas 1 e 2 do Resilia às 20:30', 5),
    ('Resilia','Aula 13h', 3)
`;

const ADD_STATUS = `
      INSERT INTO status
        (id, status_name)
      VALUES
        (1, 'Not Started'),
        (2, 'Ongoing'),
        (3, 'Continuous'),
        (4, 'TODO'),
        (5, 'Finished')
`;

db.serialize( () => {
  
  //Table Creation
  db.run( TABLE_SCHEMA_STATUS, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });

  db.run( TABLE_SCHEMA_TAREFAS, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });

  // Table Population
  db.run( ADD_STATUS, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });

  db.run( ADD_TASKS, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  })
});