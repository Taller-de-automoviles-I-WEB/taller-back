const {Router} = require('express');
const homeRouter = require('./home.router')
const clientesRouter = require('./clientes.router')
const router = Router();

router.use('/api', homeRouter);
router.use('/api/clientes', clientesRouter);


module.exports = router;