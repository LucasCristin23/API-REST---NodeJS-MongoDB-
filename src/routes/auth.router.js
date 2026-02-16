import express from 'express';
import { register, logIn } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/register', register);

authRouter.post('/login', logIn);


export default authRouter;