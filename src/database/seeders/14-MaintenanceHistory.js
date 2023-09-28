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
   await queryInterface.bulkInsert('maintenance_history', [
    {
      maintenanceHistoryID: 1,
      orderID: 1,
      description: 'Cambio de aceite programado',
      vehicleInfo: `model: 'Toyota Camry',year: 2020,plate: 'ABC123',VIN: '1HGCM82633A123456',color: 'Silver',make: 'Toyota',mileage: 30000,
      fuelType: 'Gasoline',
      engineSize: '2.5L',
      notes: 'Regularly serviced, in excellent condition.`,
      technicians: 'Alfonso Contreras',
      partsUsed: `Aceite de motor sintetico marca Castrol`,
      serviceDate: new Date('2023-09-15T13:30:00'),
      totalCost: 79.99,
      created_at: new Date(),
        updated_at: new Date()
    },
    {
      maintenanceHistoryID: 2,
      orderID: 2,
      description: 'Reparacion de motor',
      vehicleInfo: `model: 'Honda Civic',
      year: 2018,
      plate: 'XYZ789',
      VIN: '2HGFC2F5XJH543210',
      color: 'Blue',
      make: 'Honda',
      mileage: 45000,
      fuelType: 'Gasoline',
      engineSize: '1.8L',
      notes: 'One owner, well-maintained, clean interior.'`,
      technicians: 'Alfonso Contreras',
      partsUsed: `Aceite de motor sintetico marca Castrol`,
      serviceDate: new Date('2023-09-15T13:30:00'),
      totalCost: 79.99,
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
    await queryInterface.bulkDelete('maintenance_history', null, {})
  }
};
