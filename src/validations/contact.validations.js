const {check, body} = require("express-validator")

const requestValidations = [
    body("firstName") //Chequea el campo first_name del body
        .notEmpty() //Chequea que no este vacio
        .withMessage("Debes ingresar tu nombre"), //Si está vacio este será el mensaje de error
    body("lastName")
        .notEmpty()
        .withMessage("Debes ingresar tu apellido"),
    body("phone")
        .isString()
        .trim().escape()
        .notEmpty()
        .withMessage("Debes ingresar un teléfono"),
    body("email")
        .notEmpty()
        .withMessage("Debes ingresar un email")
        .bail() //Para chequear otra cosa sin que se solapen los errores
        .isEmail() //Chequea si es un email
        .withMessage("Email invalido"),
    body("question")
        .notEmpty()
        .withMessage("Debes ingresar una consulta"),
]

module.exports = {
    requestValidations
}