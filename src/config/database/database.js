const { Pool } = require('pg');

const databaseURL = process.env.DATABASE_URL;
const pool = new Pool({ connectionString: databaseURL });

process.on('SIGINT', () => {
  console.log('\nDatabase connection terminated');
  process.exit(0);
});

module.exports = pool;