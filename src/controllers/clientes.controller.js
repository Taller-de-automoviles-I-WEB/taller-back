const service = require('../services/clientes.services');
const handleHttp = require('../utils/handle.logs')

module.exports = {
  getClientes: async (req, res) => {
    try {

      const clientes = await service.getClientes();

      clientes?.length > 0
        ? res.json(clientes)
        : clientes?.length === 0 ? res.send('No hay clientes')
          : res.status(500).send('Internal server error')

    } catch (error) {

      handleHttp.errorHandler(error, req, res);

    }
  },
  getClienteById: async (req, res) => {
    try {

      const cliente = await service.getClienteById(req.params.id);

      cliente
        ? res.json(cliente)
        : cliente === null ? res.send('El cliente no existe')
          : res.status(500).send('Internal server error')

    } catch (error) {

      handleHttp.errorHandler(error, req, res);

    }
  },
  insertarCliente: async ({ body } = req, res) => {
    try {

      const cliente = await service.insertarCliente(body);

      cliente
        ? res.status(201).json(cliente)
        : res.status(500).send('Internal server error')

    } catch (error) {

      handleHttp.errorHandler(error, req, res);

    }
  },
  actualizarCliente: async (req, res) => {
    try {

      const cliente = await service.actualizarCliente({ ...req.body, id: req.params.id });

      cliente
        ? res.status(201).json(cliente)
        : cliente === null ? res.send('El cliente no existe o no ha sido actualizado')
          : res.status(500).send('Internal server error')

    } catch (error) {

      handleHttp.errorHandler(error, req, res);

    }
  },
  eliminarCliente: async (req, res) => {
    try {

      const cliente = await service.eliminarCliente(req.params.id);

      cliente === 1
        ? res.json({ message: 'Cliente eliminado' })
        : cliente === 0
          ? res.json({ message: 'El cliente no existe' })
          : res.status(500).json({ message: 'Internal server error' })

    } catch (error) {

      handleHttp.errorHandler(error, req, res)

    }
  },
  loginCliente: async (req, res) => {
    try {

      const response = await service.loginCliente(req.body.usuario, req.body.clave)

      if (!response) {
        res.status(500).send('Internal server error')
      } else if (response === 'Clave incorrecta') {
        res.status(403).send(response)
      } else if (response === 'El usuario no existe') {
        res.status(404).send(response)
      } else {
        res.send(response);
      }

    } catch (error) {

      handleHttp.errorHandler(error, req, res)

    }
  }
}