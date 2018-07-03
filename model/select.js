"use strict";
const mysql = require('mysql2/promise');
const configuracionServidor = require('../config/config').get(process.env.NODE_ENV).server;

async function selectWithConditions(columnas, tabla, columnaCondicion, operador, condicion) {

    const connection = await mysql.createConnection({
        host: configuracionServidor.host,
        user: configuracionServidor.user,
        password: configuracionServidor.password,
        database: configuracionServidor.database,
        port: configuracionServidor.port,
        ssl: configuracionServidor.ssl
    }); 

    const [rows, fields] = await connection.execute('SELECT ' + columnas + ' FROM ' + tabla + " WHERE " + columnaCondicion + " " + operador + " " + condicion)
    
    connection.end();

    return JSON.parse(JSON.stringify(rows));
}

async function select(columnas, tabla) {
    
    const connection = await mysql.createConnection({
        host: configuracionServidor.host,
        user: configuracionServidor.user,
        password: configuracionServidor.password,
        database: configuracionServidor.database,
        port: configuracionServidor.port,
        ssl: configuracionServidor.ssl
    }); 

    // query database
    const [rows, fields] = await connection.execute('SELECT ' + columnas + ' FROM ' + tabla);
    
    connection.end();

    return JSON.parse(JSON.stringify(rows));
}

module.exports = Object.assign({}, { selectWithConditions, select });