const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/config/database/data.db');

const TABLE_SCHEMA_TAREFAS = `
  CREATE TABLE IF NOT EXISTS tarefas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(50),
    descricao TEXT,
    status VARCHAR(50) DEFAULT 'Not Started'
  )
`;

const ADD_TASKS = `
  INSERT INTO tarefas 
    (titulo, descricao, status)
  VALUES 
    ('Dentista','Ir ao dentista dia 03/09 às 18h','TODO'),
    ('Yoga','Relaxar','Contínuo'),
    ('Encontrão','Encontro das turmas 1 e 2 do Resilia às 20:30','Feito'),
    ('Resilia','Aula 13h','Contínuo')
`;

db.serialize( () => {
  db.run( TABLE_SCHEMA_TAREFAS, err => {
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