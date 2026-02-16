// Aca manejamos el contacto con la DB 

import User from "../models/user.model.js";

export async function createUser(email,password){
    const user = await User.create({email,password})
    return user
}

export async function findUserById(userID){
    const user = await User.findById(userID)
    return user
}

export async function findUserByEmail(email){
    const user = await User.findOne({email})
    return user
}
