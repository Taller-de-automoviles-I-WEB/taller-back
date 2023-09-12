const db = require('../database/models');
const passwordHandler = require('../utils/handle.password.encrypt')
const handleHttp = require('../utils/handle.logs')
const tokenHandler = require('../utils/handle.jwt')

module.exports = {
  getClientes: async () => {
    try {

      const clientes = await db.Cliente.findAll();

      return clientes;

    } catch (error) {

      handleHttp.errorHandler(error);

    }
  },
  getClienteById: async (id) => {
    try {

      const cliente = await db.Cliente.findOne({ where: { id: id } });

      return cliente;

    } catch (error) {

      handleHttp.errorHandler(error);

    }
  },
  getClientByUsername: async (usuario) => {
    try {

      const cliente = await db.Cliente.findOne({ where: { usuario: usuario } });

      return cliente;

    } catch (error) {

      handleHttp.errorHandler(error);
    }
  },
  insertarCliente: async (data) => {
    try {

      data.clave = await passwordHandler.hashPassword(data.clave)

      const cliente = await db.Cliente.create(data)

      return cliente;

    } catch (error) {

      handleHttp.errorHandler(error);
    }
  },
  actualizarCliente: async (data) => {
    try {

      const cliente = await db.Cliente.update(data, { where: { id: data.id } })

      const clienteActualizado = await db.Cliente.findOne({ where: { id: data.id } })

      return cliente[ 0 ] === 1
        ? clienteActualizado
        : null;
      
    } catch (error) {

      handleHttp.errorHandler(error);
    }
  },
  eliminarCliente: async (id) => {
    try {

      const cliente = await db.Cliente.destroy({ where: { id: id } });

      return cliente;

    } catch (error) {

      handleHttp.errorHandler(error);

    }
  },
  loginCliente: async (usuario, clave) => {
    try {

      const checkCliente = await db.Cliente.findOne({ where: { usuario: usuario } });

      if (!checkCliente) return 'El usuario no existe';

      const passwordHash = checkCliente.clave;
      const isPassCorrect = await passwordHandler.comparePassword(clave, passwordHash);
      if (!isPassCorrect) return 'Clave incorrecta';

      const token = await tokenHandler.generateToken(checkCliente.usuario);
      const data = {
        data: checkCliente,
        token: token
      }

      return data
      
    } catch (error) {

      handleHttp.errorHandler(error);
      
    }
  }
}