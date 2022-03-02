const fetch = require('node-fetch');
const addReply = (request, response, next) => {
  return fetch('/api/reply')
    .then((response) => response.json())
    .then((data) => {
      res.json(console.log(data));
    })
    .catch((err) => next(err));
};

module.exports = addReply;
