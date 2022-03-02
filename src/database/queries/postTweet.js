const connection = require('./../config/connection');

const postTweet = () => {
  // Don't forget Sql injection
  let tweet_text = 'First Tweet';
  let user_id = 1;
  connection.query(
    `INSERT INTO tweets (text_content,user_id) VALUES(${tweet_text}, ${user_id});`,
    (err) => {
      if (err) throw err;
    }
  );
};

module.exports = postTweet;
