import Blog from "../Entities/Blog.js";
import fs from "fs";

const saveBlog = async (req,res) => {
    try{
        var request = new Blog(req.body);
        request.image = req.file.filename;
        var result = await request.save();
        res.status(201).json(result);
    }catch(error){
        res.status(400).json({message: error.message, statusCode: 400});
    }
}
const getBlogs = async (req,res) => {
    try{
        var request = await Blog.find();
        res.status(200).json({TotalBlogs: request.length, Data: request});
    }catch(error){
        res.status(404).json({message: error.message, statusCode: 404});
    }
}
const getBlogById = async (req,res) => {
    try{
        var request = await Blog.findById(req.params.id);
        res.status(200).json(request);
    }catch(error){
        res.status(404).json({message: error.message, statusCode: 404})
    }
}
const updateBlog = async (req,res) => {
    try{
        req.body.updatedAt = new Date();
        var request = await Blog.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json({message: "Update Success", Data: req.body});
    }catch(error){
        res.status(400).json({message: error.message, statusCode: 400});
    }
}
const deleteBlog = async (req,res) => {
    try{
        var find = await Blog.findById(req.params.id);
        fs.unlinkSync(`D:/Coding/MERN Stack/Backend/Resource/img/${find.image}`);
        await Blog.deleteOne({_id:req.params.id});
        res.status(200).json({message: "Succes Delete Blog", statusCode: 200});
    }catch(error){
        res.status(500).json({message: error.message, statusCode: 500});
    }
}

const services = {
    saveBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
};
export default services;