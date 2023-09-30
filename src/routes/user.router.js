const { Router } = require('express');
const { createUser, updateUser, getUserById, getUsers, getUsersByAny, registerClient } = require('../controllers/user.controller');
const permissions = require('../middlewares/permissions');
const checkJwt = require('../middlewares/session');
const userValidations = require('../validations/user.validations');
const responseValidations = require('../validations/index.validations');

const router = Router();

router.post('/create', [
    checkJwt,
    permissions('owner'),
    userValidations.createUser,
    responseValidations.validate
], createUser);

router.post('/register', [
    userValidations.registerClient,
    responseValidations.validate
], registerClient);

router.get('/', [
    checkJwt,
    permissions('owner')
], getUsers);

router.get('/:userID', [
    checkJwt,
    permissions('owner'),
    userValidations.getById,
    responseValidations.validate
], getUserById);

router.get('/search/:searchTerm', [
    checkJwt,
    permissions('owner')
], getUsersByAny);

router.put('/update', [
    checkJwt,
    userValidations.updateUser,
    responseValidations.validate
], updateUser);


module.exports = router;