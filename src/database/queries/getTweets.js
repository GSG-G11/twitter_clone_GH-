const connection = require('../config/connection');

const getTweets = () => {
  return connection.query(
    `SELECT * FROM tweets AS t INNER JOIN users AS u ON (u.id = t.user_id);`
  );
};
module.exports = getTweets;
