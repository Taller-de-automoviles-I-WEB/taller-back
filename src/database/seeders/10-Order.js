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
    await queryInterface.bulkInsert('orders', [
      {
        orderID: 1,
        vehicleID: 1,
        userID: 2,
        description: 'Cambio de aceite programado',
        status: 'En Proceso',
        totalCost: 50.0,
        paymentStatus: 'Pendiente',
        paymentMethod: 'Tarjeta de Crédito',
        completionDate: '2023-09-15',
        orderDate: '2023-09-15',
        notes: 'El cliente solicitó aceite sintético.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        orderID: 2,
        vehicleID: 2,
        userID: 2,
        description: 'Cambio de aceite de rutina',
        status: 'Completada',
        totalCost: 50,
        paymentStatus: 'Pagada',
        paymentMethod: 'Efectivo',
        completionDate: '2023-09-15',
        orderDate: '2023-09-15',
        notes: 'El vehículo requirió un filtro de aceite adicional el cual fue proporcionado por el cliente.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        orderID: 3,
        vehicleID: 1,
        userID: 2,
        description: 'Cambio de aceite programado (Cita Cancelada)',
        status: 'Cancelada',
        totalCost: 0.0, // La cita cancelada no tiene costo
        paymentStatus: 'No Aplicable', // La cita cancelada no requiere pago
        paymentMethod: 'No Aplicable', // La cita cancelada no requiere pago
        completionDate: null, // La cita cancelada no tiene fecha de finalización
        orderDate: '2023-09-15',
        notes: 'El cliente canceló la cita debido a un cambio de planes.',
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
    await queryInterface.bulkDelete('orders', null, {})
  }
};
