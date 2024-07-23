const clienteController = require('../controllers/cliente');
const cuentaController = require('../controllers/cuenta');
const transaccionController = require('../controllers/transaccion');
const pagoController=require('../controllers/pago');
const detallePagoController=require('../controllers/detalle');
const auth=require('../auth/auth');
const { authenticate } = require('../auth/auth');

module.exports = (app) => {
    app.get('/api', (_req, res) => res.status(200).send({
        message: 'Example project did not give you access to the API web services',
    }));
    app.post('/api/cliente/create', clienteController.create);
    app.get('/api/cliente/list', clienteController.list);
    app.get('/api/cliente/find/:id', clienteController.find);
    app.get('/api/cliente/find/:id/cuentas', clienteController.findWithCuentas);  // esta ruta obtiene el cliente y sus
    //cuentas asociadas
    app.get('/api/cliente/findcorreo/:correo', clienteController.findCorreo);
    
    app.post('/api/cuenta/create/:id_cliente', cuentaController.create);
    app.get('/api/cuenta/list', cuentaController.list);
    app.get('/api/cuenta/find/:id', cuentaController.find);
    app.patch('/api/cuenta/:id', cuentaController.update);
    app.post('/api/cuenta/findclave', cuentaController.findWithClienteId);


    app.post('/api/transaccion/create/', transaccionController.create);
    app.get('/api/cuenta/find/:id/transacciones', cuentaController.findWithTransacciones);

    //rutas de la app movil
    app.get('/api/cliente/finduser/:usuario/:password', clienteController.userLogin);
    app.get('/api/cliente/findwithtoken/:id/cuentas', auth.authenticate, clienteController.findWithCuentas);

    app.get('/api/cuenta/findtransacciones/:id/transacciones', auth.authenticate, cuentaController.findWithTransacciones);

    app.post('/api/pago/create', pagoController.create);
    app.get('/api/pago/list', pagoController.list);
    app.get('/api/pagodetalle/list', pagoController.listPagosDetalles);

    app.post('/api/detallepago/create', detallePagoController.create);
    app.get('/api/detallepago/find/:clavepago/:status', detallePagoController.find);
    app.patch('/api/detallepago/update/:clavepago', detallePagoController.updateStatus);
    


};
