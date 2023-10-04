const { Router } = require('express');
const checkJwt = require('../middlewares/session');
const permissions = require('../middlewares/permissions');
const brandValidations = require('../validations/brand.validations');
const responseValidations = require('../validations/index.validations');
const { createBrand, updateBrand, getBrands, getByName, getById } = require('../controllers/brand.controller');


const router = Router();

router.post('/create', [
    checkJwt,
    permissions('owner'),
    brandValidations.createBrand,
    responseValidations.validate
], createBrand);

router.put('/update', [
    checkJwt,
    permissions('owner'),
    brandValidations.updateBrand,
    responseValidations.validate
], updateBrand);

router.get('/', [
    checkJwt,
    permissions('owner'),
], getBrands);

router.get('/:brandID', [
    checkJwt,
    permissions('owner'),
    brandValidations.getById,
    responseValidations.validate
], getById);

router.get('/name/:name', [
    checkJwt,
    permissions('owner'),
], getByName);


module.exports = router;