const {Router} = require('express');
const homeRouter = require('./home.router')
const contactRouter = require('./contact.router')
const testRouter = require('./test.router')
const router = Router();

router.use('/api', homeRouter);
router.use('/api/contact', contactRouter);
router.use('/test', testRouter);

module.exports = router;