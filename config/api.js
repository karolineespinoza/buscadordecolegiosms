/* Configuracion */
const configuracionServidor = require('./config').get(process.env.NODE_ENV).server;
/* Controladores */
const obtenerParametria = require('../controllers/obtenerParametria');

/* Operaciones */
/*istanbul ignore next*/
module.exports = function (app) {
    //OSVT
    app.get('/microservicios/osvt/obtenerParametria',obtenerParametria.getParams);
    
};