const { Router } = require('express');
const checkJwt = require('../middlewares/session');
const permissions = require('../middlewares/permissions');
const groupValidations = require('../validations/group.validations');
const responseValidations = require('../validations/index.validations');
const { createGroup, updateGroup, getGroups, getByName, getById } = require('../controllers/group.controller');


const router = Router();

router.post('/create', [
    checkJwt,
    permissions('owner'),
    groupValidations.createGroup,
    responseValidations.validate
], createGroup);

router.put('/update', [
    checkJwt,
    permissions('owner'),
    groupValidations.updateGroup,
    responseValidations.validate
], updateGroup);

router.get('/', [
    checkJwt,
    permissions('owner'),
], getGroups);

router.get('/:groupID', [
    checkJwt,
    permissions('owner'),
    groupValidations.getById,
    responseValidations.validate
], getById);

router.get('/name/:name', [
    checkJwt,
    permissions('owner'),
], getByName);


module.exports = router;