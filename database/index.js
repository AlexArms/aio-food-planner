const { Pool } = require('pg');

const database = new Pool({
  host: 'localhost',
  user: 'alex',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

exports.database = database;
