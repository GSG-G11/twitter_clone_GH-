BEGIN;

DROP TABLE IF EXISTS users,tweets,replys CASCADE;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(50) NOT NULL UNIQUE);

INSERT INTO users (username) VALUES ('Hani3l1'),('GhadaAt');

-- Create Tweet Table;
CREATE TABLE tweets (id SERIAL PRIMARY KEY,
text_content TEXT NOT NULL,
user_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id));

INSERT INTO tweets (text_content,user_id) VALUES('First Tweet', 1),('Second Tweet', 2);

-- Create Replys Table;
CREATE TABLE replys (id SERIAL PRIMARY KEY,reply_content TEXT NOT NULL, user_id INT NOT NULL, FOREIGN KEY (user_id) REFERENCES users(id), tweet_id INT NOT NULL, FOREIGN KEY (tweet_id) REFERENCES tweets(id));

INSERT INTO replys (reply_content,user_id,tweet_id) VALUES('First Reply',1, 1),('Second Reply',1, 2);

COMMIT;