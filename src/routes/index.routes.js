const {Router} = require('express');
const homeRouter = require('./home.router')
const router = Router();

router.use('/', homeRouter);

module.exports = router;