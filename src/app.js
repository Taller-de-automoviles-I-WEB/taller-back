const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.name = "TALLER AUTOS API"

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

module.exports = app;