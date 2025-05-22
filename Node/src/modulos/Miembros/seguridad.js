
const auth = require("../../auth")

module.exports = function chequearAuth() {
    return function middleware(req, res, next) {
        try {
            const id =req.body.id;
            auth.chequearToken.confirmarToken(req, id);
            next();
        } catch (err) {
            res.status(401).json({ error: 'Token inválido o no autorizado' });
        }
    };
};
