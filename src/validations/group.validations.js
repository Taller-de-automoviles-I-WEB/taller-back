const { body, param } = require("express-validator");


const createGroup= [
    body('name')
        .notEmpty().withMessage('Name cannot be empty')
];

const updateGroup= [
    body('groupID')
        .isInt().withMessage('Group ID must be an integer')
        .notEmpty().withMessage('Group ID cannot be empty'),
    body('name')
        .notEmpty().withMessage('Name cannot be empty')
];

const getById = [
    param('groupID')
    .isInt().withMessage('Group ID must be an integer')
];

module.exports = {
    createGroup,
    updateGroup,
    getById,
};