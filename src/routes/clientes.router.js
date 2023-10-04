const { Router } = require('express');
const validarSesion = require('../middlewares/session.js')
const controller = require('../controllers/clientes.controller.js');
const validarData = require('../middlewares/dataValidator.js');

const router = Router();

router.get('/listado', controller.getClientes);
router.get('/:id', controller.getClienteById);
router.post('/nuevo', validarData.InsertarCliente, validarSesion, controller.insertarCliente);
router.post('/login', controller.loginCliente);
router.put('/:id', validarData.ActualizarCliente, validarSesion, controller.actualizarCliente);
router.delete('/:id',controller.eliminarCliente);


module.exports = router