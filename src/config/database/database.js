const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./src/config/database/data.db');

process.on('SIGINT', () =>
    db.close(() => {
        console.log('Banco encerrado!');
        process.exit(0);
    })
);

module.exports = db;