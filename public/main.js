// const replyForm = document.querySelector('.reply_tweet');
// const replyButton = document.querySelector('.reply_button');
// const author = document.querySelector('.post_author');
// const username = document.querySelector('.username');
// const tweetContent = document.querySelector('.tweet_content');
const selectUser = document.querySelector('.switch_user');
const loggedUser = localStorage.getItem('user_id');

window.onload = () => {
  renderTweets();
};

const switchUser = () => {
  localStorage.setItem('user_id', selectUser.value); //Store id in local storage
  window.location.href = '/';
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
        tweet.setAttribute('author', loggedUser);
        tweet.classList.add('tweet');
        const dropdown_tweet = document.createElement('div');
        dropdown_tweet.classList.add('dropdown_tweet');
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown');
        dropdown.style.display = 'flex';
        dropdown.style.justifyContent = 'end';
        if (tweet.getAttribute('author') === loggedUser) {
          const ellips = document.createElement('img');
          ellips.src = 'images/ellipsis-solid.svg';
          ellips.classList.add('tweets_icons');
          dropdown.appendChild(ellips);
          const dropContent = document.createElement('div');
          dropContent.classList.add('dropdown-content');
          const deleteButton = document.createElement('button');
          deleteButton.setAttribute('tweet_id', element.id); //Change This to parent node
          deleteButton.setAttribute('onclick', 'deleteTweet(this)');
          const deleteIcon = document.createElement('img');
          deleteIcon.src = 'images/trash-solid.svg';
          deleteIcon.classList.add('tweets_icons');
          deleteButton.appendChild(deleteIcon);
          const editButton = document.createElement('button');
          editButton.setAttribute('onclick', 'editTweet(this)');
          const editIcon = document.createElement('img');
          editIcon.src = 'images/pen-to-square-solid.svg';
          editIcon.classList.add('tweets_icons');
          editButton.appendChild(editIcon);
          dropContent.appendChild(deleteButton);
          dropContent.appendChild(editButton);
          dropdown_tweet.appendChild(dropdown);
          dropdown.appendChild(dropContent);
          tweet.appendChild(dropdown_tweet);
        }
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
        iconsContainer.classList.add('tweet_icons');
        const heartButton = document.createElement('button');
        heartButton.classList.add('heart_button');
        const heart = document.createElement('img');
        const replyButton = document.createElement('button');
        const reply = document.createElement('img');
        reply.classList.add('reply_box');
        heart.classList.add('heart_box');
        heart.src = 'images/heart-solid (2).svg';
        heart.style.height = '16px';
        heart.style.width = '16px';
        heart.setAttribute('tweet_number', 1);
        reply.src = 'images/reply-solid.svg';
        reply.style.height = '16px';
        reply.style.width = '16px';
        heartButton.appendChild(heart);
        replyButton.appendChild(reply);
        iconsContainer.appendChild(heartButton);
        iconsContainer.appendChild(replyButton);
        tweet.appendChild(iconsContainer);
        tweet.setAttribute('tweet_id', element.id);
        // console.log(element);
        tweetsContainer.appendChild(tweet);

        // const createElement = (tag, classname, parent) => {
        //   const item = document.createElement(tag);
        //   item.className = classname;
        //   parent.appendChild(item);
        //   return item;
        // };
      })
    )

    .catch((err) => console.log(err));
};

const replyTweet = (element) => {
  console.log(element);
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
    body: JSON.stringify({ id: loggedUser, tweet: tweetMessage }),
  });
};

const deleteTweet = (element) => {
  const id = element.getAttribute('tweet_id');
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tweet_id: id }),
  };
  fetch(`/api/delete/${id}`, options);
  window.location.href = '/';
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

const reply_button = document.querySelector('.tweet_number');
// this renders for every post
// every reply button has .tweet_number class
// whenever i console reply_button it returns null which means it didn't select
// maybe because it searches for it before rendering idk pls help

// reply_button.forEach((ele) => {
//   console.log(ele);
// });
// console.log(reply_button.getAttribute('tweet_number'));

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
const showModal = () => {
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
