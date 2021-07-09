const { Pool } = require('pg');

const database = new Pool({
  host: 'localhost',
  database: 'aio',
  user: 'alex',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = database;
