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


async function runSeeders() {
  const files = fs.readdirSync(seedersPath);

  for (const file of files) {
    if (file.endsWith('.js')) {
      const { up } = require(path.join(seedersPath, file));
      console.log(file);
      await up(sequelize.getQueryInterface(), sequelize);
    }
  }
}

runSeeders()
  .then(() => {
    console.log('Todos los seeders se han ejecutado con éxito.');
    sequelize.close();
  })
  .catch((error) => {
    console.error('Error al ejecutar los seeders:', error);
    sequelize.close();
  });
