const replyForm = document.querySelector('.reply_tweet');
const replyButton = document.querySelector('#reply_button');

const showReplyForm = () => {
  if (replyForm.style.display !== 'none') {
    replyForm.style.display = 'none';
  } else {
    replyForm.style.display = 'block';
  }
};

const addReply = () => {
  const replyMessage = document.querySelector('#reply_message').value;
  fetch('/api/reply', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ reply: replyMessage }),
  });
};
