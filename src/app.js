const express = require('express');
const handleLog = require('../src/utils/handle.logs');
const cors = require('cors');
const routes = require('./routes/index.routes');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument =  require( './swagger-output.json')

const app = express();

app.name = "TALLER AUTOS API"

app.use(helmet());
app.use(handleLog.morganLogger);
app.use(express.urlencoded({ extended: false })); 
app.use(express.json());
app.use(cors());
app.use('/api', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;