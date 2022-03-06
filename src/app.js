const path = require('path');
const fs = require('fs');
const express = require('express');
const cookieParser = require('cookie-parser');
const getTweets = require('./database/queries/getTweets');
const postTweet = require('./database/queries/postTweet');
const deleteTweet = require('./database/queries/deleteTweet');
const loginUser = require('./database/queries/loginUserQuery');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, '..', 'public')));

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

app.post('/api/tweet', (req, res, next) => {
  const user_id = req.body.id;
  const tweet = req.body.tweet;
  postTweet(tweet, user_id);
});

app.post('/api/delete/:id', (req, res) => {
  const { id } = req.params;
  deleteTweet(id)
    .then((results) =>
      res.json({
        status: 200,
        msg: 'success',
      })
    )
    .catch(console.log('SORRY IT DIDNT WORK'));
});

// app.post('/reply', (request, response, next) => {
//   const user_id = request.body.id;
//   const tweet = request.body.reply;

//   postReply(tweet, user_id, 1);
//   // Redirect to error page
// });

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  loginUser(username)
    .then((result) => result)
    .then((user) =>
      user.rows.length === 0
        ? res
            .cookie('error', 'Incorrect username or password')
            .redirect('/?e=' + encodeURIComponent('Incorrect username or password'))
        : res
            .cookie('success', `Welcome back! ${user.rows[0].name}`, { maxAge: 1000 })
            .redirect('/test')
    );
});

app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, './../public/test.html'));
});

app.listen(app.get('port'), () => {
  console.log('Server is running successfully @ http://localhost:5000');
});

module.export = app;
