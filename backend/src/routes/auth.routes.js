import express from "express"; 
import { login, logout, signup } from "../controller/auth.controller.js";


const router = express.Router(); 

//setting up signup and login and logout

router.post("/signup", signup);

router.post("/login", login)

router.post("/logout", logout )
export default router; 