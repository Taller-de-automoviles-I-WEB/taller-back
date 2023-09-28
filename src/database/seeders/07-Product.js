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
    await queryInterface.bulkInsert('products', [
      {
        productID: 1,
        brandID: 1,
        groupID: 1,
        supplierID: 1,
        name: 'Aceite de Motor Sintético',
        description: 'Aceite de motor sintético de alta calidad.',
        price: 29.99,
        stockQuantity: 100,
        code: 'AM-SYN-5W30',
        isActive: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        productID: 2,
        brandID: 2,
        groupID: 2,
        supplierID: 2,
        name: 'Llanta de Verano 225/55R17',
        description: 'Llanta de verano para vehículos de tamaño mediano.',
        price: 89.99,
        stockQuantity: 30,
        code: 'LL-225-55R17',
        isActive: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        productID: 3,
        brandID: 3,
        groupID: 3,
        supplierID: 3,
        name: 'Espejo Retrovisor Lado Izquierdo',
        description: 'Espejo retrovisor para el lado izquierdo del vehículo.',
        price: 49.99,
        stockQuantity: 50,
        code: 'ER-LI-2021',
        isActive: 1,
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
    await queryInterface.bulkDelete('products', null, {})
  }
};
