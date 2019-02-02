const streamToMongoDB = require('stream-to-mongo-db').streamToMongoDB;
const JSONStream = require('JSONStream');
const fs = require('fs');

const outputDBConfig = { dbURL: 'mongodb://localhost/streamToMongoDB', collection: 'feeds' };

const writableStream = streamToMongoDB(outputDBConfig);

fs.createReadStream('./feed.json')
  .pipe(JSONStream.parse('*'))
  .pipe(writableStream);
