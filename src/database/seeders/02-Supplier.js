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
    await queryInterface.bulkInsert('suppliers', [
      {
        supplierID: 1,
        name: 'ABC Services',
        NIT: '123456789-0',
        city: 'Bogotá',
        department: 'Cundinamarca',
        address: 'Calle 123 #456',
        email: 'contacto@abcservices.com',
        phone: '+1 (123) 456-7890',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        supplierID: 2,
        name: 'XYZ Repairs',
        NIT: '987654321-0',
        city: 'Medellín',
        department: 'Antioquia',
        address: 'Avenida Principal #789',
        email: 'info@xyzrepairs.com',
        phone: '+1 (987) 654-3210',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        supplierID: 3,
        name: 'ServiTech Solutions',
        NIT: '567890123-0',
        city: 'Cali',
        department: 'Valle del Cauca',
        address: 'Carrera 456 #789',
        email: 'info@servitech.com',
        phone: '+1 (567) 890-1234',
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
    await queryInterface.bulkDelete('suppliers', null, {})
  }
};
