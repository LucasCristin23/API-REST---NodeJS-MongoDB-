import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    user_id_1:{
        type: String,
        required: true
    },
    user_id_2:{
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now
    }
})

const Chat = mongoose.model('Chat', chatSchema)

export default Chat