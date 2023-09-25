const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'Taller de Automoviles CarFix',
    description: 'Esta API permite gestionar los servicios ofrecido por el taller,  las consultas de los clientes y los turnos solicitados por ellos para los servicios ofrecidos',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
   require('../index.js'); 
});