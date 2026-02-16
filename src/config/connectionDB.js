import mongoose from 'mongoose'
import ENVIRONMENT from './environment.js'

async function connectDB (){
    try {
        await mongoose.connect(ENVIRONMENT.MONGO_DB_STRING_CONECCTION)
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.log('Error al conectar a la base de datos')
        console.log(error)
    }
}

export default connectDB