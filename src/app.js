const path = require('path');
const express = require('express');
const getTweets = require('./database/queries/getTweets');
const postTweet = require('./database/queries/postTweet');
const deleteTweet = require('./database/queries/deleteTweet');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

// app.post('/api/delete', (req, res) => {
//   // const tweet_id = req.body.tweet_id;
//   console.log('POST TO URL');
//   // deleteTweet(tweet_id).then('Great Tweet Deleted Successfully');
// });
app.post('/api/delete/:id', (req, res) => {
  const { id } = req.params;
  deleteTweet(id).catch(console.log('SORRY IT DIDNT WORK'));
});

// app.get('/api/delete/:id', (req, res) => {
// });

// app.delete('/api/delete', (req, res) => {
//   // const tweet_id = req.body.tweet_id;
//   console.log('Congrats Deleted Tweet Successfully');
//   // deleteTweet(tweet_id).then('Great Tweet Deleted Successfully');
// });
// app.post('/reply', (request, response, next) => {
//   const user_id = request.body.id;
//   const tweet = request.body.reply;

//   postReply(tweet, user_id, 1);
//   // Redirect to error page
// });

app.listen(app.get('port'), () => {
  console.log('Server is running successfully @ http://localhost:5000');
});

// handleErrors = (res) => {
//   if (res) {
//     res.redirect(
//       path.join(__dirname, '..', 'public', 'pages', 'error_pages', '500.html')
//     );
//   }
//   return response;
// };

module.export = app;
