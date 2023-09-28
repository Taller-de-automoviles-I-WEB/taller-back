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
   await queryInterface.bulkInsert('vehicles', [
    {
      vehicleID: 1,
      userID: 2,
      model: 'Toyota Camry',
      year: 2020,
      plate: 'ABC123',
      VIN: '1HGCM82633A123456',
      color: 'Silver',
      make: 'Toyota',
      mileage: 30000,
      fuelType: 'Gasoline',
      engineSize: '2.5L',
      notes: 'Regularly serviced, in excellent condition.',
      created_at: new Date(),
        updated_at: new Date()
    },
    {
      vehicleID: 2,
      userID: 2,
      model: 'Honda Civic',
      year: 2018,
      plate: 'XYZ789',
      VIN: '2HGFC2F5XJH543210',
      color: 'Blue',
      make: 'Honda',
      mileage: 45000,
      fuelType: 'Gasoline',
      engineSize: '1.8L',
      notes: 'One owner, well-maintained, clean interior.',
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
    await queryInterface.bulkDelete('vehicles', null, {})
  }
};
