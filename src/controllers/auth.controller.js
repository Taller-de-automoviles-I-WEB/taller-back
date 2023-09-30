const authService = require('../services/auth.services');
const handleHttp = require('../utils/handle.logs')

module.exports = {
  login: async (req, res) => {
    const { identifier, password } = req.body;
    try {

      const response = await authService.login(identifier, password);
      if (!response) {
        res.status(500).send({message: 'Internal server error'})
      } else if (response === 'Clave incorrecta') {
        res.status(403).json({message: response})
      } else if (response === 'El usuario no existe') {
        res.status(404).json({message: response})
      } else {
        res.json(response);
      }

    } catch (error) {
      handleHttp.errorHandler(error, req, res)

    }
  },

}