const connection = require('../src/database/config/connection');
const build = require('../src/database/config/build.js');
const getTweets = require('./../src/database/queries/getTweets');
const getUserTweet = require('./../src/database/queries/getUserTweet');
const postReply = require('./../src/database/queries/postReply');
const postTweet = require('./../src/database/queries/postTweet');

afterAll(() => connection.end());

describe('Test Database Calls', () => {
  test('Get All Tweets', () => {
    return getTweets()
      .then((result) => {
        const data = [
          {
            id: 1,
            text_content: 'First Tweet',
            user_id: 1,
            username: 'Hani3l1',
          },
          {
            id: 2,
            text_content: 'Second Tweet',
            user_id: 2,
            username: 'GhadaAt',
          },
        ];
        expect(result.rowCount).toBe(2);
        expect(result.rows.length !== 0);
        expect(typeof result.rows === 'object');
      })
      .catch();
  });
  test('Get User Tweets', () => {
    return getTweets()
      .then((result) => {
        const resultLen = 2;
        const actualLen = result.rowCount;
        expect(actualLen).toBe(resultLen);
        expect(result.rows.length !== 0);
        expect(typeof result.rows === 'object');
      })
      .catch();
  });

  test('User Posts a tweet', () => {
    return postTweet('Third Tweet', 1)
      .then((result) => result)
      .then((data) => data)
      .then((response) =>
        expect(response.rows).toStrictEqual([
          { id: 3, text_content: 'Third Tweet', user_id: 1 },
        ])
      )
      .catch();
  });

  test('After Posting a Tweet', () => {
    postTweet('Forth Tweet', 1);
    return getTweets()
      .then((result) => {
        const resultLen = 4;
        const actualLen = result.rowCount;
        expect(actualLen).toBe(resultLen);
        expect(result.rows.length !== 0);
        expect(typeof result.rows === 'object');
      })
      .catch();
  });
});
