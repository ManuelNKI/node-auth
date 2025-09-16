import express = require("express");
const AuthRoutes = require("./auth/routes");



class AppRoutes {
  static get routes(): express.Router {
    const router = express.Router();
    
    // Definir todas mis rutas principales

    router.use('/api/auth', AuthRoutes.routes);
    // router.use('/api/user');
    // router.use('/api/products');
    // router.use('/api/clients');
    // router.use('/api/orders');


    return router;
  }
}

module.exports = AppRoutes;