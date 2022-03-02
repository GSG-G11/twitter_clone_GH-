const path = require('path');
const express = require('express');
const buildDb = require('./database/config/build');
const pool = require('./database/config/connection');
const { getUserTweets } = require('./database/queries/getUserTweet');
const getTweets = require('./database/queries/getTweets.js');
const router = require('./controllers');
const postTweet = require('./database/queries/postTweet.js');
const postReply = require('./database/queries/postReply');
const connection = require('./database/config/connection');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

app.get('/tweets', (req, res, next) => {
  getTweets()
    .then((results) =>
      res.json({
        data: results.rows,
        status: 200,
        msg: 'success',
      })
    )
    .catch(next);
});

app.post('/tweet', (request, response, next) => {
  const user_id = request.body.id;
  const tweet = request.body.reply;
  postTweet(tweet, user_id)
    .then((result) => console.log(result.row))
    .catch((err) => err);
  // Redirect to error page
  // res.redirect(307, '/');
});

app.post('/reply', (request, response, next) => {
  const user_id = request.body.id;
  const reply = request.body.reply;
  postReply(reply, user_id, 1)
    .then((result) => result.rows)
    .catch((err) => err);
  // Redirect to error page
  res.redirect(307, '/');
});

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(app.get('port'), () => {
  console.log('Server is running successfully @ http://localhost:5000');
});

module.export = app;
