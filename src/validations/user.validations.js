const { body, param } = require('express-validator');


// Custom validations
const validateOptionalPhone = (value, { req }) => {
    if (req.body.phone) {
        if (!value || value.trim() === '') {
            throw new Error('The phone number cannot be empty');
        }
    }
    return true;
}



/**
 * roleID, fullName, address, username, password, email, industry, phone(Optional)
 **/
const createUser = [
    body('roleID')
        .trim()
        .notEmpty().withMessage('Role ID is required')
        .isInt().withMessage('Role ID must be an integer'),
    body('fullName')
        .trim()
        .notEmpty().withMessage('Full name is required'),
    body('address')
        .trim()
        .notEmpty().withMessage('Address is required'),
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required')
        .isLength({ min: 6 }).withMessage('Username must be at least 6 characters long'),
    body('password')
        .trim()
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email address'),
    body('industry')
        .trim()
        .notEmpty().withMessage('Industry is required'),
    body('phone')
        .custom(validateOptionalPhone),
];

/**
*   fullName, address, username, password, email, industry, phone(Optional)
**/

const registerClient = [
    body('fullName')
        .trim()
        .notEmpty().withMessage('Full name is required'),
    body('address')
        .trim()
        .notEmpty().withMessage('Address is required'),
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required')
        .isLength({ min: 6 }).withMessage('Username must be at least 6 characters long'),
    body('password')
        .trim()
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email address'),
    body('industry')
        .trim()
        .notEmpty().withMessage('Industry is required'),
    body('phone')
        .custom(validateOptionalPhone),
];


const getById = [
    param('userID')
        .isInt().withMessage('User ID must be an integer')
];

/**
 *  userID, roleID, fullName, address, username, password, email, industry, phone(Optional)
 **/
const updateUser = [
    body('userID')
        .trim()
        .notEmpty().withMessage('User ID is required')
        .isInt().withMessage('User ID must be an integer'),
    body('roleID')
        .trim()
        .notEmpty().withMessage('Role ID is required')
        .isInt().withMessage('Role ID must be an integer'),
    body('fullName')
        .trim()
        .notEmpty().withMessage('Full name is required'),
    body('address')
        .trim()
        .notEmpty().withMessage('Address is required'),
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required')
        .isLength({ min: 6 }).withMessage('Username must be at least 6 characters long'),
    body('password')
        .trim()
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email address'),
    body('industry')
        .trim()
        .notEmpty().withMessage('Industry is required'),
    body('phone')
        .custom(validateOptionalPhone),
];

module.exports = {
    createUser,
    registerClient,
    getById,
    updateUser,
};