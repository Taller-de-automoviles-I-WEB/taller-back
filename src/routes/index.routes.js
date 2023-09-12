const {Router} = require('express');
const homeRouter = require('./home.router')
const testRouter = require('./test.router')
const clientesRouter = require('./clientes.router')
const router = Router();

router.use('/api', homeRouter);
router.use('/test', testRouter);
router.use('/api/clientes', clientesRouter);


module.exports = router;