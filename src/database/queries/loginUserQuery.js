const connection = require('./../config/connection');

const loginUser = (username) =>
  connection.query(`SELECT username,password FROM users WHERE username='${username}';`);

module.exports = loginUser;
