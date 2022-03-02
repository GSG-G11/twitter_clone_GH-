const connection = require('./../config/connection');

const postTweet = (tweet_text, user_id) => {
  const data = [tweet_text, user_id];
  const sql = 'INSERT INTO tweets (text_content,user_id) VALUES($1, $2);';
  return connection.query(sql, data);
};

module.exports = postTweet;
