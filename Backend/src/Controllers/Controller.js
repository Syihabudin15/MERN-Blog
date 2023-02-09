import express from "express";
import services from "../Services/Service.js";
import upload from "../../Config/Multer.js";

const router = express.Router();

router.post("/blog", upload.single("file"), services.saveBlog);
router.get("/blogs", services.getBlogs);
router.get("/blog/:id", services.getBlogById);
router.patch("/blog/:id", services.updateBlog);
router.delete("/blog/:id", services.deleteBlog);

export default router;