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
    await queryInterface.bulkInsert('order_services', [
      {
        orderServiceID: 1,
        orderID: 1,
        technicianID: 3,
        serviceID: 1,
        price: 50,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        orderServiceID: 2,
        orderID: 2,
        technicianID: 3,
        serviceID: 1,
        price: 50,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        orderServiceID: 3,
        orderID: 3,
        technicianID: 3,
        serviceID: 1,
        price: 50,
        created_at: new Date(),
        updated_at: new Date()
      },

    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('order_services', null, {})
  }
};
