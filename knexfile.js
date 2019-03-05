const login = require('./config/dbLogin.js');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'ec2-18-212-11-18.compute-1.amazonaws.com',
      user: `${login.user}`,
      password: `${login.password}`,
      database: 'Feed',
    },
    migrations: {
      directory: `${__dirname}/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/database/seedscripts`,
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: `${__dirname}/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/database/seedscripts/production`,
    },
  },
};
