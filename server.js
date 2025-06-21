const http = require('http'); /*Importando o HTTP */
const app = require('./app');
const port = process.env.port || 3000; /*Criando uma porta local */
const server = http.createServer(app); /*Bibliotexa HTTP */
server.listen(port);