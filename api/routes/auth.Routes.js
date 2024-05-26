import express from 'express';
import { register,login,logout } from '../controllers/auth.Controller.js';
const routes=express.Router();


routes.get("/register", (req,res)=>{
    res.send("hello")
});
routes.post("/register", register);
routes.post("/login", login)
routes.post("/logout", logout)

export default routes;