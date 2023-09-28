const {Router} = require('express');
const homeRouter = require('./home.router')
const contactRouter = require('./contact.router')
const testRouter = require('./test.router')
const clientesRouter = require('./clientes.router')
const providersRouter = require('./providers.router')
const maintenanceHistoryRouter = require('./maintenanceHistory.router')
const router = Router();

router.use('/', homeRouter);
router.use('/contact', contactRouter);
router.use('/test', testRouter);
router.use('/clientes', clientesRouter);
router.use('/providers', providersRouter)
router.use('/maintenance-history', maintenanceHistoryRouter)

module.exports = router;