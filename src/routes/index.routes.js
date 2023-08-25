const {Router} = require('express');
const homeRouter = require('./home.router')
const router = Router();

router.use('/api', homeRouter);

module.exports = router;