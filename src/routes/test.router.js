const { Router } = require('express');
const controller = require("../controllers/test.controller")
const testingMiddleware = require("../middlewares/test.middleware")
const router = Router();

router.get('/', testingMiddleware, controller.get)

module.exports = router;