const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const cors = require('cors');

const clientes = require('./modulos/Clientes/rutas');
const error = require ('./red/errors')

const app = express();
app.use(cors());

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configuracion
app.set('port', config.app.port)

//Rutas
app.use('/api/clientes', clientes)
app.use(error);

module.exports = app;