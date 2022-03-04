const connection = require('./../config/connection');

const postTweet = (tweet, user_id) => {
  const data = [tweet, user_id];
  const sql = 'INSERT INTO tweets (tweet,user_id) VALUES($1, $2) RETURNING *;';
  return connection.query(sql, data);
};
module.exports = postTweet;
