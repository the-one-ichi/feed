
exports.up = function (knex, Promise) {
  return knex.schema.createTable('feeds', (table) => {
    table.increments();
    table.string('author').notNullable();
    table.string('authorphoto').notNullable();
    table.string('title').notNullable();
    table.string('bigphoto').notNullable();
    table.string('smallphoto').notNullable();
    table.string('newsfeed').notNullable();
    table.string('videoclip').notNullable();
    table.string('timestamp').notNullable();
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
