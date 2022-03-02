const replyForm = document.querySelector('.reply_tweet');
const replyButton = document.querySelector('#reply_button');

const showReplyForm = () => {
  if (replyForm.style.display !== 'none') {
    replyForm.style.display = 'none';
  } else {
    replyForm.style.display = 'block';
  }
};

const addReply = (action) => {
  const path = action;
  if (action === 'reply') {
    const replyMessage = document.querySelector('#reply_message').value;
  }
  fetch(`/${path}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: 1, reply: replyMessage }),
  });
};
