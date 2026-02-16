import { findAllChats, createChat, findChatById, deleteChatById } from "../repository/chat.repository.js";
import { findUserById } from "../repository/user.repository.js";

export async function newChat(req, res){
    try{
        const {user_id_1, user_id_2} = req.body

        // Valido que ambos usuarios existan en la DB
        const userFound1 = await findUserById(user_id_1)
        if(!userFound1){
            // throw corta el flujo del try y va directo al catch, es como un return pero para errores 
            throw new ServerError('El usuario 1 no existe', 400)
        }
        const userFound2 = await findUserById(user_id_2)
        if(!userFound2){
            throw new ServerError('El usuario 2 no existe', 400)
        }

        await createChat(user_id_1, user_id_2)
        res.status(201).json({
            ok: true,
            status: 201 ,
            message: "Chat creado correctamente",
            data: null 
        })
    }
    catch(error){
        // Manejo errores del servidor
        if(error.status){
            // Si el error tiene un status es esperable y respondemos con ese status 
            res.status(error.status).json({
                ok: false,
                status: error.status,
                message: error.message
            })
        }else{
            console.log("error intterno del servidor", error);
            res.status(500).json({
                ok: false,
                status: 500,
                message: "Error interno del servidor"
            })
        }
    }
}

export async function getChats(req, res){
     try{
        const chats = await findAllChats()
        res.status(201).json({
            ok: true,
            status: 201 ,
            message: "Chats obtenidos correctamente",
            data: chats //! Si llega a fallar puede ser porque tiene que estar entre llaves
        })
    }
    catch(error){
        // Manejo errores del servidor
        if(error.status){
            // Si el error tiene un status es esperable y respondemos con ese status 
            res.status(error.status).json({
                ok: false,
                status: error.status,
                message: error.message
            })
        }else{
            console.log("error intterno del servidor", error);
            res.status(500).json({
                ok: false,
                status: 500,
                message: "Error interno del servidor"
            })
        }
    }
}

export async function findChat(req, res){
     try{
        const { id } = req.params

        const chat = await findChatById(id)
        res.status(201).json({
            ok: true,
            status: 201 ,
            message: "Chat obtenido correctamente",
            data: chat
        })
    }
    catch(error){
        // Manejo errores del servidor
        if(error.status){
            // Si el error tiene un status es esperable y respondemos con ese status 
            res.status(error.status).json({
                ok: false,
                status: error.status,
                message: error.message
            })
        }else{
            console.log("error intterno del servidor", error);
            res.status(500).json({
                ok: false,
                status: 500,
                message: "Error interno del servidor"
            })
        }
    }
}

export async function deleteChat(req, res){
     try{
        const { id } = req.params
        
        // Valido que el chat exista antes de eliminarlo
        const chatFound = await findChatById(id)
        if(!chatFound){
            throw new ServerError('El chat no existe', 404)
        }

        await deleteChatById(id)
        res.status(201).json({
            ok: true,
            status: 201 ,
            message: "Chat eliminado correctamente",
            data: null 
        })
    }
    catch(error){
        // Manejo errores del servidor
        if(error.status){
            // Si el error tiene un status es esperable y respondemos con ese status 
            res.status(error.status).json({
                ok: false,
                status: error.status,
                message: error.message
            })
        }else{
            console.log("error intterno del servidor", error);
            res.status(500).json({
                ok: false,
                status: 500,
                message: "Error interno del servidor"
            })
        }
    }
} 