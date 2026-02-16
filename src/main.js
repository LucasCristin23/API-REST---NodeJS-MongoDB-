import connectDB from "./config/connectionDB.js";

connectDB()


import express from 'express'
import ENVIRONMENT from "./config/environment.js";
import productRouter from "./routes/product.router.js";
import authRouter from "./routes/auth.router.js";
import chatRouter from "./routes/chat.router.js";
import authorizationMiddleware from "./middlewares/authorizationMiddleware.js";

//Crea nuestro web server
const app = express()

//Nuestra API puede recibir datos en formato JSON
app.use(express.json())


app.use('/api/auth', authRouter)

app.use(authorizationMiddleware) // A partir de aca todas las rutas van a requerir autorizacion
app.use('/api/products', productRouter)
app.use('/api/chat', chatRouter)

app.listen(
    ENVIRONMENT.PORT,
    () => {
        console.log(`Servidor escuchando en el puerto ${ENVIRONMENT.PORT}`)
    }
)