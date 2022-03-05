const connection = require('../config/connection');

const getTweets = () => {
  return connection.query(
    `SELECT t.id,tweet,name,username,user_id FROM tweets AS t INNER JOIN users AS u ON (t.user_id = u.id) ORDER BY t.id DESC;`
  );
};
module.exports = getTweets;
