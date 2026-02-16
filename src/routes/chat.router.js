import express from 'express';
import { newChat, getChats, findChat, deleteChat } from '../controllers/chat.controller.js';

const chatRouter = express.Router();

chatRouter.get('/', getChats)
chatRouter.post('/', newChat)
chatRouter.get('/:id', findChat)
chatRouter.delete('/:id', deleteChat)

export default chatRouter;
