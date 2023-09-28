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
    await queryInterface.bulkInsert('groups', [
      {
        groupID: 1,
        name: 'Aceite vehiculo',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        groupID: 2,
        name: 'LLanta',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        groupID: 3,
        name: 'Espejo retrovisor',
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
    await queryInterface.bulkDelete('groups', null, {})
  }
};
