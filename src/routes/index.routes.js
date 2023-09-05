const {Router} = require('express');
const homeRouter = require('./home.router')
const testRouter = require('./test.router')
const router = Router();

router.use('/api', homeRouter);
router.use('/test', testRouter);

module.exports = router;