const {validationResult} = require("express-validator")

const validate = (req,res, next) => {
    try {
        const errors = validationResult(req) //Extrae las validaciones del middleware

        if (errors.isEmpty()) {
            return next(); //Sin errores continua la ejecucion regular
        } else {
            const RESPONSE = {
                meta: 400,
                errors: errors.mapped() //Mapped formatea los errores en un objeto
            }
            return res.status(400).json(RESPONSE)
        }
    } catch (error) {
        const RESPONSE = {
            meta: 500,
            error
        }
        return res.status(500).json(RESPONSE)
    }
}

module.exports = {
    validate
}