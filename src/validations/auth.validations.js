const { body } = require("express-validator");


const login = [
    body('identifier')
        .trim()
        .notEmpty().withMessage('Email or username is required'),
    body('password')
        .trim()
        .notEmpty().withMessage('Password is required'),
];

module.exports = {
    login,
}