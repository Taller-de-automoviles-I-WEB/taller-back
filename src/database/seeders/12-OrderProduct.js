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
    await queryInterface.bulkInsert('order_products', [
      {
        orderProductID: 1,
        orderID: 1,
        productID: 1,
        quantity: 1,
        unitPrice: 29.99,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        orderProductID: 2,
        orderID: 2,
        productID: 1,
        quantity: 1,
        unitPrice: 29.99,
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
    await queryInterface.bulkDelete('order_products', null, {})
  }
};
