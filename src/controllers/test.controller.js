const db = require("../database/models") //Importamos la base de datos

module.exports = {
    get: async (req, res) => {
        try {
            //Obtiene todos los datos de la tabla indicada (usando el alias para indicar la tabla)
            const data = await db.TestTable.findAll() 

            //Formato de la respuesta
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

    }
}