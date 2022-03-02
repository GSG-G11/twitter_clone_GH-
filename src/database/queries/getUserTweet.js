const connection = require('../config/connection');

const getUserTweet = () =>
  // Sql injection
  connection
    .query('SELECT * FROM tweets where user_id = 1;')
    .then((response) => console.log(response.rows));

module.exports = {
  getUserTweet,
};
