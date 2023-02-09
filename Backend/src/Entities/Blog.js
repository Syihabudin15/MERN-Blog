import mongoose, { mongo } from "mongoose";

const Blog = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title cannot be null"]
    },
    subBody: {
        type: String,
        required: [true, "Sub Body cannot be null"]
    },
    body: {
        type: String,
        required: [true, "Body cannot be null"]
    },
    author: {
        type: String,
        required: [true, "Author cannot be null"]
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type : String
    },
    image: {
        type: String
    }
});

export default mongoose.model("Blog", Blog);