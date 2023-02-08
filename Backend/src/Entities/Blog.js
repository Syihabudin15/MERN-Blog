import mongoose, { mongo } from "mongoose";

const Blog = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subBody: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: String
    },
    updatedAt: {
        type : String
    }
});

export default mongoose.model("Blog", Blog);