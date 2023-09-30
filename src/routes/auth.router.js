const { Router } = require('express');
const { login } = require('../controllers/auth.controller.js');
const authValidations = require('../validations/auth.validations.js');
const responseValidations = require('../validations/index.validations');

const router = Router();

router.post('/login', [
    authValidations.login,
    responseValidations.validate
], login);


module.exports = router