const connection = require('../config/connection');

const getTweets = () => {
  // Sql injection
  return connection.query(
    `SELECT * FROM tweets AS t INNER JOIN users AS u ON (u.id = t.user_id) LIMIT 7;`
  );
};
module.exports = getTweets;
