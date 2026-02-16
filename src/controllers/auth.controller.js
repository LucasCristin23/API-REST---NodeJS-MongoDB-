// Los controladores se encargan de manejar las peticiones y respuestas 

import { findUserByEmail } from "../repository/user.repository.js"
import { createUser } from "../repository/user.repository.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import ENVIRONMENT from "../config/environment.js"
import ServerError from "../helper/serverError.js"


export async function register(req, res) {
    try {
        const { email, password } = req.body
        const userFound = await findUserByEmail(email)
        if (userFound) {
            // throw corta el flujo del try y va directo al catch, es como un return pero para errores 
            throw new ServerError('El email ya esta registrado', 400)
        }

        // Encriptamos la contraseña antes de guardarla en la DB, para eso usamos bcrypt
        const passwordCrypted = await bcrypt.hash(password, 10)
        await createUser(email, passwordCrypted)
        res.status(201).json({
            ok: true,
            status: 201,
            message: "Usuario creado correctamente",
            data: null
        })
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

export async function logIn(req, res) {
    try {
        const { email, password } = req.body
        const userFound = await findUserByEmail(email)
        if (!userFound) {
            throw new ServerError('El email no esta registrado', 404)
        }
        const passwordMatch = await bcrypt.compare(password, userFound.password)
        if (!passwordMatch) {
            throw new ServerError('La contraseña es incorrecta', 401)
        }

        const authToken = jwt.sign(
            {
                email, id: userFound._id,
                createdAt: userFound.create_at
            },
            ENVIRONMENT.JWT_SECRET_KEY
        )
        return res.status(200).json({
            ok: true,
            token: authToken
        })

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
