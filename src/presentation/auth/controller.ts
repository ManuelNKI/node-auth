import express = require("express");
const RegisterUserDto = require("../../domain/dtos/auth/register-user.dto");

class AuthController {

  // DI

  constructor() {}

    registerUser = (req: express.Request, res: express.Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body);
    if (error) {
      return res.status(400).json({ error });
    }
    res.json( registerUserDto );
  }

  loginUser = (req: express.Request, res: express.Response) => {
    res.json('loginUser controller');
  }
}

module.exports = AuthController;