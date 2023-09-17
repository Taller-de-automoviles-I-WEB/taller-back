const {Router} = require('express');
const homeRouter = require('./home.router')
const testRouter = require('./test.router')
const clientesRouter = require('./clientes.router')
const providersRouter = require('./providers.router')
const router = Router();

router.use('/api', homeRouter);
router.use('/test', testRouter);
router.use('/clientes', clientesRouter);
router.use('/providers', providersRouter)


module.exports = router;