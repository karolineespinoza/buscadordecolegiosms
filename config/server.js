'use strict'

const bodyParser = require('body-parser');
const configuracion = require('./configBD').get(process.env.NODE_ENV).server;

var express = require("express"),
    app = express(),
    methodOverride = require("method-override");

const start = () => {
  return new Promise((resolve) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    var router = express.Router();

    //CONFIG
    console.log('Ambiente: '+process.env.NODE_ENV);
    //CORS management
    if (configuracion.enableCors === true){
      const cors = require('cors');
      var corsOpts = {
          origin: (origin, callback) => {
              if (configuracion.allowedCorsRequestsAddress.indexOf(origin) !== -1 || configuracion.allowedCorsRequestsAddress.indexOf('*') !== -1) {
                  callback(null, true); 
              }
              else {
                  callback(new Error('Not allowed by CORS'));
              }
          }
      };
      app.options('*', cors(corsOpts));
      app.use(cors(corsOpts));
    }
    require('./api')(router);
   
   
    const microOSVT = app.listen(configuracion.port1, () => {
     console.log("Aplicacion OSVT ejecutandose en el puerto: " + configuracion.port1);
      resolve(microOSVT);
    });
  })
}

module.exports = { start };
