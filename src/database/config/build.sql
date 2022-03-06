BEGIN;

DROP TABLE IF EXISTS users,tweets,replys CASCADE;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
username VARCHAR(50) NOT NULL UNIQUE,
password VARCHAR(50) NOT NULL
);

INSERT INTO users (name,username,password) VALUES ('Hani Elwan','Hani3l1','qwerty'),('Ghada Attallah','GhadaAt','qwerty');

-- Create Tweet Table;
CREATE TABLE tweets (id SERIAL PRIMARY KEY,
tweet TEXT NOT NULL,
user_id INT NOT NULL);


ALTER TABLE tweets
ADD FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

INSERT INTO tweets (tweet,user_id) VALUES('First Tweet', 1),('Second Tweet', 2);

-- Create Replys Table;
-- CREATE TABLE replys (id SERIAL PRIMARY KEY,reply_content TEXT NOT NULL, user_id INT NOT NULL;

-- ALTER TABLE replys
-- ADD FOREIGN KEY (user_id) REFERENCES users(id), tweet_id INT NOT NULL, FOREIGN KEY (tweet_id) REFERENCES tweets(id)) ON DELETE CASCADE;

-- INSERT INTO replys (reply_content,user_id,tweet_id) VALUES('First Reply',1, 1),('Second Reply',1, 2);

COMMIT;