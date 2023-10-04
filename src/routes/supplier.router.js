const { Router } = require('express');
const { createSupplier, updateSupplier, getSuppliers, getByNit, getByName, getByLocation } = require('../controllers/supplier.controller');
const checkJwt = require('../middlewares/session');
const permissions = require('../middlewares/permissions');
const supplierValidations = require('../validations/supplier.validations');
const responseValidations = require('../validations/index.validations');
const router = Router();

router.post('/create', [
    checkJwt,
    permissions('owner'),
    supplierValidations.createSupplier,
    responseValidations.validate
], createSupplier);

router.put('/update', [
    checkJwt,
    permissions('owner'),
    supplierValidations.updateSupplier,
    responseValidations.validate
], updateSupplier);

router.get('/', [
    checkJwt,
    permissions('owner')
], getSuppliers);

router.get('/NIT/:NIT', [
    checkJwt,
    permissions('owner'),
    supplierValidations.getByNIT,
    responseValidations.validate
], getByNit);

router.get('/name/:name', [
    checkJwt,
    permissions('owner'),
    supplierValidations.getByName,
    responseValidations.validate
], getByName);

router.get('/location/:location', [
    checkJwt,
    permissions('owner'),
    supplierValidations.getByLocation,
    responseValidations.validate
], getByLocation);

module.exports = router;