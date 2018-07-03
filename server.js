'use strict'

const bodyParser = require('body-parser');
const configuracion = require('./config/config').get(process.env.NODE_ENV).server;

var express = require("express"),
    app = express(),
    methodOverride = require("method-override");


    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    var router = express.Router();

    //CONFIG
    console.log('Ambientesssss: '+process.env.NODE_ENV);

    router.get('/', function(req, res) {
        res.send("Hello World!");
     });

     app.use(router)

    require('./config/api')(router);
   
   
    const microOSVT = app.listen(configuracion.port1, () => {
     console.log("Aplicacion OSVT ejecutandose en el puerto: " + configuracion.port1);
      
    });


