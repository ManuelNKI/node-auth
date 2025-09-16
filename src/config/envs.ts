import 'dotenv/config';
import get = require ("env-var");

const envs = {
  PORT: get.get("PORT").required().asPortNumber(),
}

module.exports = envs;