'use strict';

const handlePasswordEncrypt = require('../../utils/handle.password.encrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        userID: 1,
        roleID: 1,
        fullName: 'Daniela Diaz Rojas',
        address: 'Calle fake #5',
        username: 'daniela',
        password:  await handlePasswordEncrypt.hashPassword('pwd'),
        email: 'ddiaz@mail.com',
        industry: 'N/A',
        state: 1,
        phone: '+425468124785',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        userID: 2,
        roleID: 2,
        fullName: 'Cristian David Triana',
        address: 'Calle fake #7',
        username: 'cristian',
        password: await handlePasswordEncrypt.hashPassword('pwd'),
        email: 'cdavid@mail.com',
        industry: 'Flota los llanos',
        state: 1,
        phone: '+425439924785',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        userID: 3,
        roleID: 3,
        fullName: 'Alfonso Contreras',
        address: 'Calle fake #1',
        username: 'alfonso',
        password: await handlePasswordEncrypt.hashPassword('pwd'),
        email: 'acontreras@mail.com',
        industry: 'N/A',
        state: 1,
        phone: '+425478524715',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {})
  }
};
