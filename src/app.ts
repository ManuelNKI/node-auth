const server = require("./presentation/server");
const envs = require("./config");
const AppRoutes = require("./presentation/routes");

(() => {
  main();
})();

async function main () {
  // todo. await base de datos
  
  // todo: inicio de nuestro server
  new server({
    port: envs.PORT,
    routes: AppRoutes.routes
  }).start();

}
