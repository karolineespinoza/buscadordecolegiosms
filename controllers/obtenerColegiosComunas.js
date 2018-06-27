"use strict";
var config = require('../config/configBD').get(process.env.NODE_ENV);
var mensaje;
var nombreOperacion = "obtenerComunasColegios"; 

exports.getParams = function(req, res) {
	try {
		var params = {
			host: config.dataBase,
        };
        
        const test ={
            colegios:
            [
                "Academia",
                "Nido de aguilas",
            ],
            comunas:[
                "Recoleta",
                "Santiago",
                "Independencia",
                "Huechuraba"
            ],
            tiposColegio:[
                "Particular",
                "Municipal",
                "Particular subvencionado"
            ]
        }
        return res.status(200).send(test);
	} catch (err) {
		
		return res.status(500).send(err);
	}
}
