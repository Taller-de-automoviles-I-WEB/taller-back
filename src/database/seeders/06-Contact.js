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
    await queryInterface.bulkInsert('contact_requests', [
      {
        id: 1,
        first_name: 'Raul',
        last_name: 'Perez',
        phone: '+3534578914',
        email: 'rperez@mail.com',
        question: 'Presupuesto para cambio de parabrisas incluyendo repuestos si es posible',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        first_name: 'Luisa',
        last_name: 'Pedraza',
        phone: '+3534578254',
        email: 'lpedraza@mail.com',
        question: 'Ofrecimineto de servicios de marqueting para el taller, contactarme via whatsapp si es de interes',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        first_name: 'Carlos',
        last_name: 'Rodriguez',
        phone: '+3536548914',
        email: 'crodriguez@mail.com',
        question: 'Queria consultar si manejan reparacion de tractocamiones',
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
    await queryInterface.bulkDelete('contact_requests', null, {})
  }
};
