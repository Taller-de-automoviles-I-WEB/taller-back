const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const { DB_USER, DB_PASS, DB_NAME, DB_HOST, DB_PORT } = process.env; 

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    dialect: 'mysql',
    host: DB_HOST,
    port: DB_PORT
});

const seedersPath = path.join(__dirname, 'seeders');

fs.readdirSync(seedersPath).forEach((file) => {
  if (file.endsWith('.js')) {
    const { down } = require(path.join(seedersPath, file));
    down(sequelize.getQueryInterface(), sequelize);
  }
});
