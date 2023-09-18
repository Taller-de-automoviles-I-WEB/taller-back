const express = require('express');
const handleLog = require('../src/utils/handle.logs');
const cors = require('cors');
const routes = require('./routes/index.routes');
const helmet = require('helmet');

const app = express();

app.name = "TALLER AUTOS API"

app.use(helmet());
app.use(handleLog.morganLogger);
app.use(express.urlencoded({ extended: false })); //Esto junto al json() son necesarios para la recepcion de datos de body
app.use(express.json());
app.use(cors());
app.use('/api', routes);

module.exports = app;