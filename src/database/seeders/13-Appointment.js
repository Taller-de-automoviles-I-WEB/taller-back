'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('appointments', [
    {
      appointmentID: 1,
      orderID: 1,
      dateAndTime: new Date('2023-09-15T12:00:00'),
      estimatedCompletion: new Date('2023-09-15T13:00:00'),
      status: 'pending',
      created_at: new Date(),
        updated_at: new Date()
    },
    {
      appointmentID: 2,
      orderID: 2,
      dateAndTime: new Date('2023-09-15T13:30:00'),
      estimatedCompletion: new Date('2023-09-15T14:00:00'),
      status: 'pending',
      created_at: new Date(),
        updated_at: new Date()
    },
    {
      appointmentID: 3,
      orderID: 3,
      dateAndTime: new Date('2023-09-15T15:00:00'),
      estimatedCompletion: new Date('2023-09-15T17:00:00'),
      status: 'canceled',
      created_at: new Date(),
        updated_at: new Date()
    }
   ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('appointments', null, {})
  }
};
