const { Router } = require('express');
const controller = require("../controllers/contact.controller")
const router = Router();
const { requestValidations } = require("../validations/contact.validations")
const { validate } = require("../validations/index.validations")

router.get('/', controller.get)
router.post('/', requestValidations, validate, controller.createRequest)

module.exports = router;