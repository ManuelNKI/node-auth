import express = require ("express");

interface Options {
  port?: number;
  routes: express.Router;
}
class Server {
  public readonly app = express();
  private readonly port: number;
  private readonly routes: express.Router;
  constructor( options: Options) {
    const { port = 3100, routes} = options;
    this.port = port;
    this.routes = routes;
  }

  async start() {

    // Middlewares
    this.app.use( express.json() );
    this.app.use( express.urlencoded({ extended: true }) ); // x-www-form-urlencoded


    // Usar las rutas definidas
    this.app.use(this.routes);

    // Escuchar el puerto
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    })
  }
}
module.exports = Server;