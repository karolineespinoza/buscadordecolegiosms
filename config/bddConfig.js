const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
    host: 'webapp-vbc.mysql.database.azure.com',
    user: 'myadmin@webapp-vbc',
    password: 'VBC182744670,',
    database: 'appbdc',
    port: 3306,
    ssl: true
});

module.exports = Object.assign({}, { connection });