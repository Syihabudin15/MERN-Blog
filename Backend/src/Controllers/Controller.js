import express from "express";
import services from "../Services/Service.js";

const router = express.Router();

router.post("/blog", services.saveBlog);
router.get("/blogs", services.getBlogs);
router.get("/blog/:id", services.getBlogById);
router.patch("/blog/:id", services.updateBlog);
router.delete("/blog/:id", services.deleteBlog);

export default router;