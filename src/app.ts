const server = require("./presentation/server");

(() => {
  main();
})();

async function main () {
  // todo. await base de datos
  
  // todo: inicio de nuestro server
  new server({}).start();

}
