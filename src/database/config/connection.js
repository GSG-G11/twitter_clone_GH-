const { Pool } = require('pg');
const url = require('url');
require('env2')('./.env');

if (!process.env.DB_URL) throw new Error('Enviroment variable DB_URL must be set');

const params = new URL(process.env.DB_URL);

const options = {
  connectionString: process.env.DB_URL,
  ssl: false,
};

module.exports = new Pool(options);
