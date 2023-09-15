const { Router } = require('express');
// const validarSesion = require('../middlewares/session')
const controller = require('../controllers/clientes.js');
const validarData = require('../middlewares/dataValidator.js');

const router = Router();

router.get('/listado', controller.getClientes);
router.get('/:id', controller.getClienteById);
router.post('/nuevo', validarData.InsertarCliente, controller.insertarCliente);
// router.post('/login', controller.loginCliente);
router.put('/:id', validarData.ActualizarCliente, controller.actualizarCliente);
router.delete('/:id',controller.eliminarCliente);


module.exports = router