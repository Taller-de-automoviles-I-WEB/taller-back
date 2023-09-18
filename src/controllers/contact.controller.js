//Extraigo directamente la tabla Contact que es la que voy a usar
const {Contact} = require("../database/models")

module.exports = {
    get: async (req, res) => {
        try {
            const data = await Contact.findAll();
            const RESPONSE = {
                meta: 200,
                data
            }
            
            return res.status(200).json(RESPONSE)
        } catch (error) {
            const RESPONSE = {
                meta: 500,
                error
            }
            return res.status(500).json(RESPONSE)
        }
    },
    createRequest: async (req, res) => {
        try {
            const ok = await Contact.create(req.body);
            const RESPONSE = {
                meta: 200,
                ok
            }
            
            return res.status(200).json(RESPONSE)
        } catch (error) {
            const RESPONSE = {
                meta: 500,
                error
            }
            return res.status(500).json(RESPONSE)
        }
    }
}