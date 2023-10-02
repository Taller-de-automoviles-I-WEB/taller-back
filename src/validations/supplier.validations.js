const { body, param } = require("express-validator");

/**
*   name, NIT, city, department, address, email, phone
**/
const createSupplier = [
    body('name')
        .notEmpty().withMessage('Name cannot be empty'),
    body('NIT')
        .notEmpty().withMessage('NIT cannot be empty'),
    body('city')
        .notEmpty().withMessage('City cannot be empty'),
    body('department')
        .notEmpty().withMessage('Department cannot be empty'),
    body('address')
        .notEmpty().withMessage('Address cannot be empty'),
    body('email')
        .notEmpty().withMessage('Email cannot be empty')
        .isEmail().withMessage('Invalid email format'),
    body('phone')
        .notEmpty().withMessage('Phone cannot be empty'),
];

/**
*   supplierID, name, NIT, city, department, address, email, phone
**/
const updateSupplier = [
    body('supplierID')
        .trim()
        .notEmpty().withMessage('Supplier ID is required')
        .isInt().withMessage('Supplier ID must be an integer'),
    body('name')
        .notEmpty().withMessage('Name cannot be empty'),
    body('NIT')
        .notEmpty().withMessage('NIT cannot be empty'),
    body('city')
        .notEmpty().withMessage('City cannot be empty'),
    body('department')
        .notEmpty().withMessage('Department cannot be empty'),
    body('address')
        .notEmpty().withMessage('Address cannot be empty'),
    body('email')
        .notEmpty().withMessage('Email cannot be empty')
        .isEmail().withMessage('Invalid email format'),
    body('phone')
        .notEmpty().withMessage('Phone cannot be empty'),
];

const getByNIT = [
    param('NIT')
        .notEmpty().withMessage('NIT must be an integer')
];

const getByName = [
    param('name')
        .notEmpty().withMessage('Name cannot be empty')
];

const getByLocation = [
    param('location')
        .notEmpty().withMessage('Location cannot be empty')
];

module.exports = {
    createSupplier,
    updateSupplier,
    getByNIT,
    getByName,
    getByLocation,
};