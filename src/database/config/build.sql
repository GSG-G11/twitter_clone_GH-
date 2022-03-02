BEGIN;

DROP TABLE IF EXISTS users,tweets CASCADE;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(50) NOT NULL UNIQUE);

INSERT INTO users (username) VALUES ('Hani3l1'),('GhadaAt');

-- Create Tweet Table;
CREATE TABLE tweets (id SERIAL PRIMARY KEY,
text_content TEXT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
user_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id));

INSERT INTO tweets (text_content,user_id) VALUES('First Tweet', 1),('Second Tweet', 2);

COMMIT;