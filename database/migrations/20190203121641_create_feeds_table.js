
exports.up = function (knex, Promise) {
  return knex.schema.createTable('feeds', (table) => {
    table.increments();
    table.string('author', 1000).notNullable();
    table.string('authorphoto', 1000).notNullable();
    table.string('title', 1000).notNullable();
    table.string('bigphoto', 1000).notNullable();
    table.string('smallphoto', 1000).notNullable();
    table.string('newsfeed', 1000).notNullable();
    table.string('videoclip', 1000).notNullable();
    table.string('timestamp', 1000).notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('feeds');
};

// author: String,
//   authorphoto: String,
//   title: String,
//   bigphoto: String,
//   smallphoto: String,
//   newsfeed: String,
//   videoclip: String,
//   timestamp: String,
