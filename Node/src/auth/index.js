const jwt =  require('jsonwebtoken');
const config = require('../config');
const error = require('../middleware/errors')

const secret = config.jwt.secret;

function asignarToken(data){
    return jwt.sign(data,secret);
}

function verificarToken(token){
    return jwt.verify(token, secret)
} 

const chequearToken = {
    confirmarToken: function(req, id){
        const decoficado = decodificarCabecera(req);

        if (decoficado.id !== id){   //para poder indicar que administrador puede modificar.
            throw error("No puedes hacer esto", 401)
        }
    }
}

function obtenerToken (autorizacion){
    if(!autorizacion){
        throw error('No viene Token',401)
    }
    if(autorizacion.indexOf('Bearer') === -1){
        throw error('Formato invalido',401)
    }

    let token = autorizacion.replace('Bearer ','')
    return token;
}

function decodificarCabecera(req){
    const autorizacion = req.headers.authorization || ' ';
    const token = obtenerToken(autorizacion);
    const decodificar = verificarToken(token);

    req.use = decodificar;

    return decodificar;
}

module.exports = {
    asignarToken, chequearToken
}