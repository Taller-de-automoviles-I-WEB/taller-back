const { body, param } = require("express-validator");


const createBrand = [
    body('name')
        .notEmpty().withMessage('Name cannot be empty')
];

const updateBrand = [
    body('brandID')
        .isInt().withMessage('Brand ID must be an integer')
        .notEmpty().withMessage('Brand ID cannot be empty'),
    body('name')
        .notEmpty().withMessage('Name cannot be empty')
];

const getById = [
    param('brandID')
    .isInt().withMessage('Brand ID must be an integer')
];

module.exports = {
    createBrand,
    updateBrand,
    getById,
};