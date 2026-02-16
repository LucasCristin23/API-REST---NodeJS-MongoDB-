import ServerError from "../helper/serverError.js"
import jwt from 'jsonwebtoken'
import ENVIRONMENT from "../config/environment.js"

function authorizationMiddleware(req, res, next) {

    try {
        // El header authorization es donde se suele enviar el token de autenticación
        const auhorizationHeader = req.headers.authorization
        // Si no esta el token asumo que no lo tiene y lanzo un error
        if (!auhorizationHeader) {
            throw new ServerError('No se proporcionó un token de autenticación', 401)
        }
        const authToken = auhorizationHeader.split(' ')[1] // Tomamos el segundo valor que es el que contiene el token
        if (!authToken) {
            throw new ServerError('No hay Token', 401)
        }

        // Verifico que el token sea valido
        const payload = jwt.verify(authToken, ENVIRONMENT.JWT_SECRET_KEY)
        req.user = payload // Guardo en la consulta del servidor los datos de sesion del cliente
        next() // Permite que el middleware finalice y deje continuar con la siguiente función que maneja la ruta a la que se esta intentando acceder

    }
    catch (error) {
        // Manejo errores del servidor
        if (error.status) {
            // Si el error tiene un status es esperable y respondemos con ese status 
            res.status(error.status).json({
                ok: false,
                status: error.status,
                message: error.message
            })
        } else {
            console.log("error intterno del servidor", error);
            res.status(500).json({
                ok: false,
                status: 500,
                message: "Error interno del servidor"
            })
        }
    }
}

export default authorizationMiddleware