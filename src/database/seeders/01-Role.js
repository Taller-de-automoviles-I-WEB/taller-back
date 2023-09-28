'use strict';

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
    await queryInterface.bulkInsert('roles', [
      {
        roleID: 1,
        name: 'owner',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        roleID: 2,
        name: 'client',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        roleID: 3,
        name: 'technician',
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
    await queryInterface.bulkDelete('roles', null, {})
  }
};
