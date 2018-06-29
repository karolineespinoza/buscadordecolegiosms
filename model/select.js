"use strict";
const conexion = require('../config/bddConfig');
//const mysql = conexion.conn;
let result = {};
function selectAll(columnas, tabla) {
    mysql.connect(
        function (err) {
            if (err) {
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Connection established.");
                return selectSimple(columnas, tabla);
            }
        });
}

function selectSimple(columnas, tabla) {
    mysql.query('SELECT ' + columnas + ' FROM ' + tabla,
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Selected ' + results.length + ' row(s).');
            var i = 0;
            for (i = 0; i < results.length; i++) {
                console.log('Row: ' + JSON.stringify(results[i]));
            }
            result = results;
            console.log('Done.');
        })
    /* mysql.end(
    function (err) { 
        if (err) {
            throw err;
        }else{  
            return result;
            console.log('Closing connection.')
        } 
    }); */
}

function selectByCondition(columnas, tabla, columnaCondicion, operador, condicion) {

    mysql.connect(
        function (err) {
            if (err) {
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Connection established.");
                selectWithConditions(columnas, tabla);
            }
        });
}

function selectWithConditions(columnas, tabla, columnaCondicion, operador, condicion) {
    mysql.query('SELECT ' + columnas + ' FROM ' + tabla + " WHERE " + columnaCondicion + " " + operador + " " + condicion,
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Selected ' + results.length + ' row(s).');
            var i = 0;
            for (i = 0; i < results.length; i++) {
                console.log('Row: ' + JSON.stringify(results[i]));
            }
            console.log('Done.');
        })
    mysql.end(
        function (err) {
            if (err) throw err;
            else console.log('Closing connection.')
        });
}

async function select(columnas, tabla) {

    const mysql = require('mysql2/promise');

    const connection = await mysql.createConnection({
        host: 'webapp-vbc.mysql.database.azure.com',
        user: 'myadmin@webapp-vbc',
        password: 'VBC182744670,',
        database: 'appbdc',
        port: 3306,
        ssl: true
    });
    // query database
    const [rows, fields] = await connection.execute('SELECT ' + columnas + ' FROM ' + tabla);
    return JSON.parse(JSON.stringify(rows));
}

module.exports = Object.assign({}, { selectAll, selectByCondition, select });