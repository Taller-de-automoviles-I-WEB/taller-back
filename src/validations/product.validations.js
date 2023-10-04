const { body, param } = require("express-validator");

/**
 *   brandID, groupID, supplierID, name, description, price, stockQuantity, code
 **/
const createProduct = [
    body('brandID')
        .notEmpty().withMessage('Brand ID cannot be empty')
        .isInt().withMessage('Brand ID must be an integer'),
    body('groupID')
        .notEmpty().withMessage('Group ID cannot be empty')
        .isInt().withMessage('Group ID must be an integer'),
    body('supplierID')
        .notEmpty().withMessage('Supplier ID cannot be empty')
        .isInt().withMessage('Supplier ID must be an integer'),
    body('name')
        .notEmpty().withMessage('Name cannot be empty'),
    body('description')
        .notEmpty().withMessage('Description cannot be empty'),
    body('price')
        .notEmpty().withMessage('Price cannot be empty')
        .isDecimal().withMessage('Price must be a decimal number'),
    body('stockQuantity')
        .notEmpty().withMessage('Stock quantity cannot be empty')
        .isInt().withMessage('Stock quantity must be an integer'),
    body('code')
        .notEmpty().withMessage('Code cannot be empty'),
];

/**
 *   productID, brandID, groupID, supplierID, name, description, price, stockQuantity, code
 **/
const updateProduct = [
    body('productID')
        .isInt().withMessage('Product ID must be an integer'),
    body('brandID')
        .notEmpty().withMessage('Brand ID cannot be empty')
        .isInt().withMessage('Brand ID must be an integer'),
    body('groupID')
        .notEmpty().withMessage('Group ID cannot be empty')
        .isInt().withMessage('Group ID must be an integer'),
    body('supplierID')
        .notEmpty().withMessage('Supplier ID cannot be empty')
        .isInt().withMessage('Supplier ID must be an integer'),
    body('name')
        .notEmpty().withMessage('Name cannot be empty'),
    body('description')
        .notEmpty().withMessage('Description cannot be empty'),
    body('price')
        .notEmpty().withMessage('Price cannot be empty')
        .isDecimal().withMessage('Price must be a decimal number'),
    body('stockQuantity')
        .notEmpty().withMessage('Stock quantity cannot be empty')
        .isInt().withMessage('Stock quantity must be an integer'),
    body('code')
        .notEmpty().withMessage('Code cannot be empty'),
];

const getProductById = [
    param('productID')
        .isInt().withMessage('Product ID must be an integer'),
];

const getProductsBySupplier = [
    param('supplierID')
        .isInt().withMessage('Supplier ID must be an integer'),
];

const getProductsByGroups = [
    param('groupID')
        .isInt().withMessage('Group ID must be an integer'),
];

const getProductsByBrand = [
    param('brandID')
        .isInt().withMessage('Brand ID must be an integer'),
];

module.exports = {
    createProduct,
    updateProduct,
    getProductById,
    getProductsBySupplier,
    getProductsByGroups,
    getProductsByBrand,
};
