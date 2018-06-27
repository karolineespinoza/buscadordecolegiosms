/* Configuracion */
const configuracionServidor = require('./configBD').get(process.env.NODE_ENV).server;
/* Controladores */
const obtenerColegiosComunas = require('../controllers/obtenerColegiosComunas');

/* Operaciones */
/*istanbul ignore next*/
module.exports = function (app) {
    //OSVT
    app.get('/microservicios/osvt/obtenerParametria',obtenerColegiosComunas.getParams);
    
};