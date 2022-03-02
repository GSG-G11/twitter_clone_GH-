const replyForm = document.querySelector('.reply_tweet');
const replyButton = document.querySelector('.reply_button');

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
