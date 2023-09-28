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
    await queryInterface.bulkInsert('brands', [
      {
        brandID: 1,
        name: 'Castrol',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        brandID: 2,
        name: 'Pirelli',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        brandID: 3,
        name: 'Generic',
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
    await queryInterface.bulkDelete('brands', null, {})
  }
};
