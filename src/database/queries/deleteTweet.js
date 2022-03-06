const connection = require('./../config/connection');

const deleteTweet = (tweet_id) => {
  const id = [tweet_id];
  const sql = 'DELETE FROM tweets WHERE id = $1;';
  return connection.query(sql, id);
};

console.log('Hello there');
module.exports = deleteTweet;
