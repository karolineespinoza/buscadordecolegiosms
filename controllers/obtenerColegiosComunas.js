"use strict"

const knexConfig = require('../config/bddConfig'),
    db = require('../model/select'),
    config = require('../config/configBD').get(process.env.NODE_ENV),
    nombreOperacion = "obtenerComunasColegios";

exports.getParams = function (req, res) {
    try {
        let respuesta = {
        };

        db.select('*', 'comuna')
        .then(resultado => {
            console.log(resultado)
            respuesta.comunas = resultado;
            return db.select('*', 'tipocolegio');
        })
        .then(resultado => {
            respuesta.tiposColegio = resultado;
            return db.select('*', 'colegio');
        })
        .then(resultado => {
            respuesta.colegios = resultado;
            res.status(200).send(respuesta)
        })
        .catch((error) => {

            return res.status(500).send(error);
        }); 
        //respuesta.comunas = db.select('*', 'comuna');

        //respuesta.tiposColegio = db.selectAll('*', 'tipocolegio');
        /*    .then((resolve) => {
               console.log(resolve);
               respuesta.comunas = resolve;
               return db.selectAll('*', 'tipocolegio');
           })
           .then((resolve) => {
               respuesta.tiposColegio = resolve;
               return db.selectAll('*', 'colegio');
           })
           .then((resolve) => {
               respuesta.colegios = resolve;
               return res.status(200).send(respuesta);
           })
           .catch((error) => {

               return res.status(400).send(error);
           }); */

    } catch (error) {

        return res.status(500).send(error);
    }
}