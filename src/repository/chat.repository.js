// Manejo la comunicacion de Chats con la DB

import Chat from "../models/chat.model.js"

export async function createChat (user_id_1, user_id_2){
    const chat = await Chat.create({user_id_1, user_id_2})
    console.log(chat)
    return chat
}

export async function findChatById (chat_id){
    const chat = await Chat.findById(chat_id)
    console.log(chat)
    return chat
}

export async function findAllChats(){
    const chats = await Chat.find()
    console.log(chats)
    return chats
}

export async function deleteChatById (chat_id){
    const chat = await Chat.findByIdAndDelete(chat_id)
    console.log(chat)
    return chat
}