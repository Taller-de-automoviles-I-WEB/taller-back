const express = require('express');
const handleLog = require('../src/utils/handle.logs');
const cors = require('cors');
const routes = require('./routes/index.routes');

const app = express();

app.name = "TALLER AUTOS API"


app.use(express.json());
app.use(cors());
app.use(handleLog.morganLogger);
app.use('/', routes);
module.exports = app;