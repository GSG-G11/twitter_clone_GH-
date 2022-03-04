const replyForm = document.querySelector('.reply_tweet');
const replyButton = document.querySelector('.reply_button');
const author = document.querySelector('.post_author');
const username = document.querySelector('.username');
const tweetContent = document.querySelector('.tweet_content');

window.onload = () => {
  renderTweets();
};

const renderTweets = () => {
  const tweetsContainer = document.querySelector('.tweets_container');

  fetch('/tweets', {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((result) => result.json())
    .then((tweets) =>
      tweets.data.forEach((element) => {
        const tweet = document.createElement('div');
        tweet.classList.add('tweet');
        const profile = document.createElement('div');
        profile.classList.add('profile');
        const profileImg = document.createElement('img');
        profileImg.src =
          'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png';
        profileImg.classList.add('profile_img');
        const header = document.createElement('div');
        header.classList.add('tweet_header');
        const nameContainer = document.createElement('div');
        nameContainer.classList.add('tweet_name');
        const name = document.createElement('p');
        name.textContent = element.name; // append user name
        const username = document.createElement('p');
        username.textContent = '@' + element.username; // append username
        nameContainer.appendChild(name);
        nameContainer.appendChild(username);
        const tweetText = document.createElement('h3');
        tweetText.textContent = element.tweet; // append tweet
        header.appendChild(nameContainer);
        header.appendChild(tweetText);
        profile.appendChild(profileImg);
        profile.appendChild(header);
        tweet.appendChild(profile);
        const iconsContainer = document.createElement('div');
        const heart = document.createElement('img');
        const reply = document.createElement('img');
        nameContainer.appendChild(name);
        nameContainer.appendChild(username);
        iconsContainer.classList.add('tweet_icons');
        heart.src = 'images/heart-solid (2).svg';
        heart.height = '20px';
        heart.width = '20px';
        reply.src = 'images/reply-solid.svg';
        reply.height = '20px';
        reply.width = '20px';
        iconsContainer.appendChild(heart);
        iconsContainer.appendChild(reply);
        tweet.appendChild(iconsContainer);
        tweetsContainer.appendChild(tweet);
      })
    )

    .catch((err) => console.log(err));
};

const addTweet = () => {
  const tweetMessage = document.querySelector('.tweet_message').value;
  fetch('/api/tweet', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    // Change Id Here To be user.id
    body: JSON.stringify({ id: 1, tweet: tweetMessage }),
  });
};

// const showReplyForm = () => {
//   if (replyForm.style.display !== 'none') {
//     replyForm.style.display = 'none';
//   } else {
//     replyForm.style.display = 'block';
//   }
// };

// const addReply = () => {
//   const replyMessage = document.querySelector('.reply_message').value;
//   fetch('/reply', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ id: 1, reply: replyMessage }),
//   });
// };

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// const tweet = document.createElement('div');
//         tweet.classList.add('tweet');
//         const profileImg = document.createElement('img');
//         profileImg.src =
//           'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png';
//         profileImg.classList.add('profile_img');
//         tweet.appendChild(profileImg); // append Image to tweet
//         const header = document.createElement('div');
//         header.classList.add('tweet_name');
//         const nameContainer = document.createElement('div');
//         nameContainer.classList.add('tweet_header');
//         const name = document.createElement('p');
//         name.textContent = element.name; // append user name
//         const username = document.createElement('p');
//         username.textContent = '@' + element.username; // append username
//         nameContainer.appendChild(name);
//         nameContainer.appendChild(username);
//         const tweetText = document.createElement('h3');
//         tweetText.textContent = element.tweet; // append tweet
//         nameContainer.appendChild(tweetText);
//         tweet.appendChild(nameContainer);
//         const iconsContainer = document.createElement('div');
//         iconsContainer.classList.add('tweet_icons');
//         const heart = document.createElement('img');
//         heart.src = 'images/heart-solid (2).svg';
//         heart.height = '20px';
//         heart.width = '20px';
//         const reply = document.createElement('img');
//         reply.src = 'images/reply-solid.svg';
//         reply.height = '20px';
//         reply.width = '20px';
//         iconsContainer.appendChild(heart);
//         iconsContainer.appendChild(reply);
//         tweet.appendChild(iconsContainer);
//         tweetsContainer.appendChild(tweet);
