const connection = require('../config/connection');

const getUserTweets = (user_id) =>
  // Sql injection
  connection
    .query(`SELECT * FROM tweets where user_id = ${user_id};`)
    .then((response) => console.log(response.rows));

module.exports = {
  getUserTweets,
};
