const faker = require('faker');


const createFakeFeed = () => ({
  author: `${faker.name.lastName()} ${faker.name.lastName()}`,
  authorphoto: `https://loremflickr.com/320/240/face?lock=${faker.random.number(1000)}`,
  title: `${faker.lorem.words()}`,
  bigphoto: `https://loremflickr.com/620/400/football?lock=${faker.random.number(1000)}`,
  smallphoto: `https://loremflickr.com/1280/720/football?lock=${faker.random.number(1000)}`,
  newsfeed: `${faker.lorem.paragraph()}`,
  videoclip: `${faker.internet.url()}`,
  timestamp: `${faker.date.between('2018-11-01', '2019-02-01')}`,


});

exports.seed = async function seed(knex, Promise) {
  console.log('start', new Date());
  const batchFeeds = 10000;
  for (let j = 0; j < batchFeeds; j += 1) {
  // Feeds
    const fakeFeeds = [];
    const desiredFakeFeeds = 1000;
    for (let i = 0; i < desiredFakeFeeds; i += 1) {
      fakeFeeds.push(createFakeFeed());
    }
    await knex('feeds')
      .insert(fakeFeeds);
  }
  console.log('end', new Date());
};


// Deletes ALL existing entries
// return knex('feeds').del()
// eslint-disable-next-line arrow-body-style
//     .then(() => {
//       // Inserts seed entries
//       return knex('feeds').insert(
//         {
//           author: `${faker.name.lastName()} ${faker.name.lastName()}`,
//           authorphoto: `https://loremflickr.com/320/240/face?lock=${faker.random.number(1000)}`,
//           title: `${faker.lorem.words()}`,
//           bigphoto: `https://loremflickr.com/620/400/football?lock=${faker.random.number(1000)}`,
//           smallphoto: `https://loremflickr.com/1280/720/football?lock=${faker.random.number(100)}`,
//           newsfeed: `${faker.lorem.paragraph()}`,
//           videoclip: `${faker.internet.url()}`,
//           timestamp: `${faker.date.between('2018-11-01', '2019-02-01')}`,
//         },
//       );
//     });
// };


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
