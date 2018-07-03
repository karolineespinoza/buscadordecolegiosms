"use strict"

const db = require('../model/select'),
    config = require('../config/config').get(process.env.NODE_ENV),
    nombreOperacion = "obtenerComunasColegios";

exports.getParams = function (req, res) {
    try {
        let respuesta = {
        };

        db.select('*', 'comuna')
        .then(resultado => {
            console.log("1. Comunas OK");
            respuesta.comunas = resultado;
            return db.select('*', 'ciudad');
        })
        .then(resultado => {
            console.log("2. Ciudades OK");
            respuesta.ciudades = resultado;
            return db.select('*', 'region');
        })
        .then(resultado => {
            console.log("3. Regiones OK");
            respuesta.regiones = resultado;
            return db.select('*', 'tipocolegio');
        })
        .then(resultado => {
            console.log("4. Tipos de Colegios OK");
            respuesta.tiposColegio = resultado;
            return db.select('*', 'colegio');
        })
        .then(resultado => {
            console.log("5. Colegios OK");
            respuesta.colegios = resultado;
            res.status(200).send(respuesta)
        })
        .catch((error) => {
            console.log("No se pudo obtener la parametría desde la BDD: " + error);
            return res.status(500).send(error);
        }); 
       

    } catch (error) {

        return res.status(500).send(error);
    }
}