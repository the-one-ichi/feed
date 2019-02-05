const faker = require('faker');

const insertFeed = function (num) {
  arr = [];
  for (let i = 0; i < num; i += 1) {
    arr.push({
      author: `${faker.name.lastName()} ${faker.name.lastName()}`,
      authorphoto: `${faker.image.avatar()}`,
      title: `${faker.lorem.words()}`,
      bigphoto: `https://loremflickr.com/620/400/football?lock=${faker.random.number(1000)}`,
      smallphoto: `https://loremflickr.com/1280/720/football?lock=${faker.random.number(100)}`,
      newsfeed: `${faker.lorem.paragraph()}`,
      videoclip: `${faker.internet.url()}`,
      timestamp: `${faker.date.between('2018-11-01', '2019-02-01')}`,
    });
  }
};

exports.seed = function seed(knex, Promise) {
  // Deletes ALL existing entries
  return knex('feeds').del()
    // eslint-disable-next-line arrow-body-style
    .then(() => {
      // Inserts seed entries
      return knex('feeds').insert(
        insertFeed(100);
      );
    });
};


// [
//   {
//     author: `${faker.name.lastName()} ${faker.name.lastName()}`,
//     authorphoto: `https://loremflickr.com/320/240/face?lock=${faker.random.number(1000)}`,
//     title: `${faker.lorem.words()}`,
//     bigphoto: `https://loremflickr.com/620/400/football?lock=${faker.random.number(1000)}`,
//     smallphoto: `https://loremflickr.com/1280/720/football?lock=${faker.random.number(1000)}`,
//     newsfeed: `${faker.lorem.paragraph()}`,
//     videoclip: `${faker.internet.url()}`,
//     timestamp: `${faker.date.between('2018-11-01', '2019-02-01')}`,
//   },
// ]