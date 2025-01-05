import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    messages: [
        {
            message: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now(),
            },
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

const User = mongoose.model("User", schema);
export default User;