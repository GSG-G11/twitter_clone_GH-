const connection = require('../config/connection');

const postReply = (reply_content, user_id, tweet_id) => {
  const data = [tweet_text, user_id];
  const sql = 'INSERT INTO replys (reply_content,user_id,tweet_id) VALUES($1, $2, $3);';
  return connection.query(sql, data);
};

module.exports = postReply;
