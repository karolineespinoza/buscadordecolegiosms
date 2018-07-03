"use strict";

module.exports.get = function get(env)  {
    return {
        server: {
            port1: process.env.PUERTO1 || 3001,
            port2: process.env.PUERTO2 || 3002,
            allowedCorsRequestsAddress: (process.env.BFF_CORS_REQUESTS_ADDRESS || '*').split(','),
            enableCors: true,
            host: 'webapp-vbc.mysql.database.azure.com',
            user: 'myadmin@webapp-vbc',
            password: 'VBC182744670,',
            database: 'appbdc',
            port: 3306,
            ssl: true
        }
    }
}