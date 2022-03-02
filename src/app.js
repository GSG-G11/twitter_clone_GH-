const express = require('express');
const buildDb = require('./database/config/build');
const pool = require('./database/config/connection');
const { getUserTweets } = require('./database/queries/getUserTweet');
const postTweet = require('./database/queries/postTweet.js');
const getTweets = require('./database/queries/getTweets.js');

const app = express();

// app.get('/', (req, res) => {
//   getUserTweet(user_id)
//     .then((results) => console.log(results))
//     .catch('Error');
// });

app.get('/', (req, res) => {
  getTweets().then((result) => console.log(result.rows));
});
app.listen(5000, console.log('http://localhost:5000'));
