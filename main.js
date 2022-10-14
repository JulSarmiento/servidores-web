const express = require('express');
const app = express();
require('dotenv').config();

const routes = require('./routers');

app.use(routes);

const PATH = process.env.PORT || 8080;

const server = app.listen(PATH, () => {
    console.log(`Servidor corriendo en la ruta: ${PATH}`);
})

server.on('error', error => console.error(error));