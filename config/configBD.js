"use strict";

module.exports.get = function get(env)  {
    return {
        server: {
            port1: process.env.PUERTO1 || 3001,
            port2: process.env.PUERTO2 || 3002,
            allowedCorsRequestsAddress: (process.env.BFF_CORS_REQUESTS_ADDRESS || '*').split(','),
            enableCors: true,
        }
    }
}