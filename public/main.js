const replyForm = document.querySelector('.reply_tweet');
const replyButton = document.querySelector('.reply_button');
const author = document.querySelector('.post_author');
const username = document.querySelector('.username');
const tweetContent = document.querySelector('.tweet_content');

window.onload = () => {
  renderTweets();
};
const renderTweets = () => {
  fetch('/tweets', {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((result) => result.json())
    .then((tweets) =>
      console.log(
        tweets.data.forEach((element) => {
          console.log(element);
          author.appendChild(document.createTextNode(element.username));
          username.appendChild(document.createTextNode(element.username));
          tweetContent.appendChild(document.createTextNode(element.text_content));
        })
      )
    )
    .catch((err) => console.log(err));
};

const showReplyForm = () => {
  if (replyForm.style.display !== 'none') {
    replyForm.style.display = 'none';
  } else {
    replyForm.style.display = 'block';
  }
};

const addTweet = () => {
  const tweetMessage = document.querySelector('.tweet_message').value;
  fetch('/tweet', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: 1, reply: tweetMessage }),
  });
};

const addReply = () => {
  const replyMessage = document.querySelector('.reply_message').value;
  fetch('/reply', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: 1, reply: replyMessage }),
  });
};
