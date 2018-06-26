/* Configuracion */
const configuracionServidor = require('./configBD').get(process.env.NODE_ENV).server;
/* Controladores */
const obtenerColegiosComunas = require('../controllers/obtenerColegiosComunas');

/* Operaciones */
/*istanbul ignore next*/
module.exports = function (appOSVT) {
    //OSVT
    appOSVT.get('/microservicios/osvt/obtenerParametria', (req, res) => { obtenerColegiosComunas(req, res) });
    
};