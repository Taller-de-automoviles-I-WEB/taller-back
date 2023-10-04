const {Router} = require('express');
const homeRouter = require('./home.router')
const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const contactRouter = require('./contact.router')
const testRouter = require('./test.router')
const clientesRouter = require('./clientes.router')
const providersRouter = require('./providers.router')
const productRouter = require('./product.router')
const groupRouter = require('./group.router');
const brandRouter = require('./brand.router')
const maintenanceHistoryRouter = require('./maintenanceHistory.router')
const supplierRouter = require('./supplier.router');
const router = Router();

router.use('/', homeRouter);
router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/supplier', supplierRouter);
router.use('/group', groupRouter);
router.use('/brand', brandRouter);
router.use('/product', productRouter);
router.use('/contact', contactRouter);
router.use('/test', testRouter);
router.use('/clientes', clientesRouter);
router.use('/providers', providersRouter)
router.use('/maintenance-history', maintenanceHistoryRouter)

module.exports = router;