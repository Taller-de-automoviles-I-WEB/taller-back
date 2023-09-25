require("dotenv").config();
const db = require('./src/database/models');
const app = require('./src/app');
const { PORT } = process.env;

// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './swagger-output.json' assert { type: 'json' };

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, async () => {
    console.log(`Server running in port ${PORT}`)
    try {
        await db.sequelize.authenticate();
        console.log('Database connect!');
    } catch (error) {
        console.log(error)
    }
})