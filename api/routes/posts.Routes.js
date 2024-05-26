import express from 'express';
const routes=express.Router();
import { getPost,getPosts,addPost,deletePost,updatePost } from '../controllers/posts.Controller.js';
routes.get("/",getPosts)
routes.get("/:id",getPost)
routes.post("/",addPost)
routes.delete("/:id",deletePost)
routes.put("/:id",updatePost)


export default routes;  