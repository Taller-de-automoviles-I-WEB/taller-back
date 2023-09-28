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
    await queryInterface.bulkInsert('services', [
      {
        serviceID: 1,
        name: 'Cambio de Aceite',
        description: 'Cambio de aceite y filtro de aceite.',
        category: 'Mantenimiento',
        duration: 30,
        price: 50,
        notes: 'Se utiliza aceite sintético de alta calidad.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        serviceID: 2,
        name: 'Reparación de Frenos',
        description: 'Reemplazo de pastillas y discos de freno.',
        category: 'Reparación',
        duration: 120,
        price: 150,
        notes: 'Se utilizan piezas de repuesto de calidad OEM.',
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
    await queryInterface.bulkDelete('services', null, {})
  }
};
