const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');

const miembros = require('./modulos/Miembros/rutas');
const autores = require('./modulos/Autores/rutas');
const libros = require('./modulos/Libros/rutas');
const auth = require('./modulos/Auth/rutas')
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
app.use('/api/miembros', miembros)
app.use('/api/autor', autores)
app.use('/api/libros', libros)
app.use('/api/login', auth)
app.use(error);

module.exports = app;