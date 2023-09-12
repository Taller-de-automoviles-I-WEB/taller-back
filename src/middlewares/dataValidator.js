const  { check, validationResult } = require('express-validator');
const clienteService = require('../services/clientes');


module.exports = {

  InsertarCliente : [
    check('nombre').isString().trim().escape(),
    check('apellido').isString().trim().escape(),
    check('domicilio').isString().trim().escape(),
    check('tipo').isString().trim().escape(),
    check('usuario').isString().trim().escape(),
    check('clave').isString().trim().escape(),
    check('usuario').trim().isEmail().normalizeEmail(),
    async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const allowedFields = [ 'nombre', 'apellido', 'domicilio', 'tipo', 'usuario', 'clave' ];
      const requestFields = Object.keys(req.body);
      const extraFields = requestFields.filter((field) => !allowedFields.includes(field));
  
      if (extraFields.length > 0) {
        return res.status(400).json({ error: `Los siguientes campos no son permitidos: ${extraFields.join(', ')}` });
      }
  
      const tipo = req.body.tipo
      if(tipo !== 'Particular' && tipo !== 'Empresa') {
        return res.status(400).json({ error: 'El tipo debe ser Particular o Empresa' });
      }
  
      const usuario = await clienteService.getClientByUsername(req.body.usuario);
      if (usuario) {
        return res.status(400).json({ error: 'El usuario ya existe' });
      }
  
      next();
    }
  ],
  
   ActualizarCliente : [
    check('nombre').isString().trim().escape().optional(),
    check('apellido').isString().trim().escape().optional(),
    check('domicilio').isString().trim().escape().optional(),
    check('tipo').isString().trim().escape().optional(),
    check('usuario').isString().trim().escape().optional(),
    check('clave').isString().trim().escape().optional(),
     check('usuario').trim().isEmail().normalizeEmail().optional(),
    
    async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const allowedFields = [ 'nombre', 'apellido', 'domicilio', 'tipo', 'usuario', 'clave' ];
      const requestFields = Object.keys(req.body);
      const extraFields = requestFields.filter((field) => !allowedFields.includes(field));
      if (extraFields.length > 0) {
        return res.status(400).json({ error: `Los siguientes campos no son permitidos: ${extraFields.join(', ')}` });
      }
  
      const tipo = req.body.tipo;
      if (tipo) {
        if (tipo !== 'Particular' && tipo !== 'Empresa') {
          return res.status(400).json({ error: 'El tipo debe ser Particular o Empresa' });
        }
      }

      next();
      
    }
  ],
  Token: [
    async (req, res, next) => {
      const token = req.headers[ 'authorization' ];
      if (!token) return res.status(401).send('Token requerido');
      next();
    }
   ]
}

