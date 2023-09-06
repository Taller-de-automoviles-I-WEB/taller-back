const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index.routes')
const app = express();

app.name = "TALLER AUTOS API"

app.use(express.urlencoded({ extended: false })); //Esto junto al json() son necesarios para la recepcion de datos de body
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/', routes);
module.exports = app;