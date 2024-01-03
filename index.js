const jsonServer = require("json-server");//es5 // importing json-server library

const server = jsonServer.create(); // created 
const router = jsonServer.router("onlineshopping.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3006; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port);