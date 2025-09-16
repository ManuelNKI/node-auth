import express = require("express");
const AuthController = require("./controller");



class AuthRoutes {
  static get routes(): express.Router {
    const router = express.Router();
    const controller = new AuthController();
    // Definir todas mis rutas principales
    router.post('/login', controller.loginUser);
    router.post('/register', controller.registerUser);

    return router;
  }
}

module.exports = AuthRoutes;