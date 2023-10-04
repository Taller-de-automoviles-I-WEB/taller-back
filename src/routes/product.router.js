const { Router } = require('express');
const checkJwt = require('../middlewares/session');
const permissions = require('../middlewares/permissions');
const productValidations = require('../validations/product.validations');
const responseValidations = require('../validations/index.validations');
const { createProduct, updateProduct, getProducts, getProductById, getProductByCode, getProductsByBrand, getProductsByGroups, getProductsBySupplier, getProductsByName } = require('../controllers/product.controller');


const router = Router();

router.post('/create', [
    checkJwt,
    permissions('owner'),
    productValidations.createProduct,
    responseValidations.validate
], createProduct);

router.put('/update', [
    checkJwt,
    permissions('owner'),
    productValidations.updateProduct,
    responseValidations.validate
], updateProduct);

router.get('/', [
    checkJwt,
    permissions('owner'),
], getProducts);

router.get('/:productID', [
    checkJwt,
    permissions('owner'),
    productValidations.getProductById,
    responseValidations.validate
], getProductById);

router.get('/code/:code', [
    checkJwt,
    permissions('owner'),
], getProductByCode);

router.get('/name/:name', [
    checkJwt,
    permissions('owner'),
], getProductsByName);

router.get('/supplier/:supplierID', [
    checkJwt,
    permissions('owner'),
    productValidations.getProductsBySupplier,
    responseValidations.validate
], getProductsBySupplier);

router.get('/group/:groupID', [
    checkJwt,
    permissions('owner'),
    productValidations.getProductsByGroups,
    responseValidations.validate
], getProductsByGroups);

router.get('/brand/:brandID', [
    checkJwt,
    permissions('owner'),
    productValidations.getProductsByBrand,
    responseValidations.validate
], getProductsByBrand);


module.exports = router;