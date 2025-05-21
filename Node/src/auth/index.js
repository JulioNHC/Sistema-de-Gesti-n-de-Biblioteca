const jwt =  require('jsonwebtoken');
config = require('../config')

const secret = config.jwt.secret;

function asignarToken(data){
    return jwt.sign(data,secret);
}

function verificarToken(token){
    return jwt.verify(token, secret)
} 

const chequearToken = {
    confirmarToken: function(req){
        const decoficado = decodificarCabecera(req);

        // if (decoficado.id !== id){   para poder indicar que administrador puede modificar.
        //     throw new Error("No puedes hacer esto")
        // }
    }
}

function obtenerToken (autorizacion){
    if(!autorizacion){
        throw new Error('No viene Token')
    }
    if(autorizacion.indexOf('Bearer') === -1){
        throw new Error('Formato invalido')
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