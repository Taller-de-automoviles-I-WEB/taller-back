const testingMiddleware = (req, res, next) => {
    console.log(`Now running route ${req.baseUrl}`)
    next();
}

module.exports = testingMiddleware