const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

process.on('SIGINT', () => {
  console.log('\nDatabase connection terminated');
  process.exit(0);
});

module.exports = pool;