GET/feeds

 - Queries database for 10 most recently created records

 Route

app.get('/feeds', (req, res) => {
  console.log('test');
  knex.select().from('feeds').orderBy('timestamp', 'desc').limit(10)
    .then((data) => {
      console.log(data.timestamp);
      res.send(data);
    });
});

 Response

[
    {
        "id": 25807098,
        "author": "Gerlach Kuhic",
        "authorphoto": "https://loremflickr.com/320/240/face?lock=727",
        "title": "modi tenetur cumque",
        "bigphoto": "https://loremflickr.com/620/400/football?lock=280",
        "smallphoto": "https://loremflickr.com/1280/720/football?lock=788",
        "newsfeed": "Consequuntur animi quidem facere voluptatum quasi doloremque modi eum sint. Et tempora sed est natus et est repudiandae. Voluptates ratione dolores occaecati rerum. Perferendis ipsum rerum dolorem.",
        "videoclip": "http://hassie.name",
        "timestamp": "Wed Mar 27 2019 23:59:59 GMT-0400 (Eastern Daylight Time)"
    },
    {
        "id": 22412020,
        "author": "O'Hara Wilkinson",
        "authorphoto": "https://loremflickr.com/320/240/face?lock=578",
        "title": "veniam vel quia",
        "bigphoto": "https://loremflickr.com/620/400/football?lock=503",
        "smallphoto": "https://loremflickr.com/1280/720/football?lock=136",
        "newsfeed": "Odit ad pariatur qui eum molestias repellat. Esse voluptatem magni placeat cum. Rerum et autem iusto incidunt doloribus. Distinctio deleniti quibusdam sed voluptatem.",
        "videoclip": "http://shanelle.org",
        "timestamp": "Wed Mar 27 2019 23:59:59 GMT-0400 (Eastern Daylight Time)"
    },
    {
        "id": 22817379,
        "author": "Kunze Ernser",
        "authorphoto": "https://loremflickr.com/320/240/face?lock=164",
        "title": "exercitationem animi qui",
        "bigphoto": "https://loremflickr.com/620/400/football?lock=162",
        "smallphoto": "https://loremflickr.com/1280/720/football?lock=514",
        "newsfeed": "Illo at nisi odit eum expedita sit. Sunt est repudiandae. Adipisci et incidunt et recusandae. Rerum id sint laboriosam autem. Voluptatem praesentium quae architecto laboriosam enim suscipit. Et maiores fugit libero.",
        "videoclip": "http://kamille.biz",
        "timestamp": "Wed Mar 27 2019 23:59:58 GMT-0400 (Eastern Daylight Time)"
    },
    {
        "id": 25871158,
        "author": "Barrows Hoeger",
        "authorphoto": "https://loremflickr.com/320/240/face?lock=381",
        "title": "cum voluptatibus assumenda",
        "bigphoto": "https://loremflickr.com/620/400/football?lock=157",
        "smallphoto": "https://loremflickr.com/1280/720/football?lock=518",
        "newsfeed": "Dolor consectetur ab ut nihil. Quod veniam quia quis amet ex officiis adipisci minus quis. Cum quia dolorem minima quos accusantium.",
        "videoclip": "https://lisa.biz",
        "timestamp": "Wed Mar 27 2019 23:59:57 GMT-0400 (Eastern Daylight Time)"
    },
    {
        "id": 21139693,
        "author": "Little Satterfield",
        "authorphoto": "https://loremflickr.com/320/240/face?lock=430",
        "title": "magni minus veritatis",
        "bigphoto": "https://loremflickr.com/620/400/football?lock=290",
        "smallphoto": "https://loremflickr.com/1280/720/football?lock=526",
        "newsfeed": "Quas natus et laboriosam. Praesentium quasi rerum sint incidunt. Omnis sequi quasi. Reiciendis corrupti rerum consequatur placeat reprehenderit magnam suscipit. Dignissimos tempore excepturi repellat consectetur sunt. Fuga laborum soluta.",
        "videoclip": "http://kyler.org",
        "timestamp": "Wed Mar 27 2019 23:59:53 GMT-0400 (Eastern Daylight Time)"
    },
    {
        "id": 20772608,
        "author": "Mueller Morar",
        "authorphoto": "https://loremflickr.com/320/240/face?lock=301",
        "title": "impedit qui accusamus",
        "bigphoto": "https://loremflickr.com/620/400/football?lock=944",
        "smallphoto": "https://loremflickr.com/1280/720/football?lock=136",
        "newsfeed": "Fugiat qui suscipit voluptatem earum voluptatem non nihil sint sint. Ipsam qui qui rerum ut architecto exercitationem laborum. Cumque id error. Rerum alias illum eos ut ab facilis qui sit. Voluptas repudiandae a reiciendis quia ut libero fugiat eveniet necessitatibus.",
        "videoclip": "https://mariam.com",
        "timestamp": "Wed Mar 27 2019 23:59:52 GMT-0400 (Eastern Daylight Time)"
    },
    {
        "id": 22242814,
        "author": "Wehner Weber",
        "authorphoto": "https://loremflickr.com/320/240/face?lock=451",
        "title": "consectetur vel iste",
        "bigphoto": "https://loremflickr.com/620/400/football?lock=200",
        "smallphoto": "https://loremflickr.com/1280/720/football?lock=537",
        "newsfeed": "Tempora quam deleniti eveniet debitis aut eum voluptas incidunt. Cumque nemo ab dolorem adipisci architecto dolorum aut iusto asperiores. Impedit blanditiis aliquid est ipsa aut est dicta debitis. Porro et impedit aliquam molestiae velit et. Laudantium velit nesciunt officiis.",
        "videoclip": "http://lauryn.biz",
        "timestamp": "Wed Mar 27 2019 23:59:51 GMT-0400 (Eastern Daylight Time)"
    },
    {
        "id": 25258454,
        "author": "Hegmann Berge",
        "authorphoto": "https://loremflickr.com/320/240/face?lock=978",
        "title": "quia voluptatum dicta",
        "bigphoto": "https://loremflickr.com/620/400/football?lock=467",
        "smallphoto": "https://loremflickr.com/1280/720/football?lock=882",
        "newsfeed": "Vero et facere omnis placeat explicabo et quidem voluptatem. Non nulla nisi illum reprehenderit eum animi aut deleniti voluptates. Asperiores aperiam quas dolorem repellat non natus doloribus. Et occaecati consectetur sed et perspiciatis ut dolor. Et id qui dolores porro aspernatur.",
        "videoclip": "https://elmer.org",
        "timestamp": "Wed Mar 27 2019 23:59:50 GMT-0400 (Eastern Daylight Time)"
    },
    {
        "id": 27146804,
        "author": "Rolfson VonRueden",
        "authorphoto": "https://loremflickr.com/320/240/face?lock=203",
        "title": "doloremque architecto ullam",
        "bigphoto": "https://loremflickr.com/620/400/football?lock=620",
        "smallphoto": "https://loremflickr.com/1280/720/football?lock=15",
        "newsfeed": "Sed amet iusto ut id unde. Maiores quas ipsum labore. Praesentium deleniti nulla dolores doloribus facere ratione. Alias enim aut et neque temporibus quis. Voluptas eum facilis perspiciatis. Corrupti ratione magni qui.",
        "videoclip": "http://ryleigh.info",
        "timestamp": "Wed Mar 27 2019 23:59:49 GMT-0400 (Eastern Daylight Time)"
    },
    {
        "id": 25104567,
        "author": "Schuster Auer",
        "authorphoto": "https://loremflickr.com/320/240/face?lock=850",
        "title": "odio tempora est",
        "bigphoto": "https://loremflickr.com/620/400/football?lock=658",
        "smallphoto": "https://loremflickr.com/1280/720/football?lock=13",
        "newsfeed": "Modi id sunt. Vel illo quae sed tempore eum rerum et consectetur. Repellendus eaque magnam deserunt. Quos hic expedita delectus eum voluptas.",
        "videoclip": "https://ruby.biz",
        "timestamp": "Wed Mar 27 2019 23:59:49 GMT-0400 (Eastern Daylight Time)"
    }
]

POST/feeds

  - Writes record to database


 Route

app.post('/feeds', (req, res) => {
  knex('feeds').insert({
    author: 'Casey Shamey',
    authorphoto: 'https://loremflickr.com/320/240/face',
    title: `${faker.lorem.words()}`,
    bigphoto: 'https://loremflickr.com/620/400/football',
    smallphoto: 'https://loremflickr.com/1280/720/football',
    newsfeed: `${faker.lorem.paragraph()}`,
    videoclip: `${faker.internet.url()}`,
    timestamp: `${faker.date.between('2018-11-01', '2019-02-01')}`,
  })
    .then(() => {
      res.send('Data inserted');
    });
});

 Response

  Data inserted

PUT/feeds

 - Modifies record in database

 Route

app.put('/feeds', (req, res) => {
  knex('feeds').where({ author: 'Casey Shamey' })
    .update({ author: 'Casey S Shamey' })
    .then(() => {
      res.send('Entry updated.');
    });
});

 Response

  Entry updated.

DELETE/feeds

 - Deletes record from database

 Route

app.delete('/feeds', (req, res) => {
  knex('feeds').where('author', 'Casey S Shamey')
    .del();
  res.send('Deleted entry');
});

 Response

Deleted entry