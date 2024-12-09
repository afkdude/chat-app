import express from "express";
import authRoutes from "./routes/auth.routes.js "
import dotenv from "dotenv"; 
import { connectDB } from "./lib/db.js";

//to use features of dotenv very imp to do this step at the top of the file 
dotenv.config(); 
   
const app = express(); 

app.use("/api/auth", authRoutes); 



//accessing port no from .env file using process.env syntax 
const PORT = process.env.PORT; 


//listening on following port 
app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
  //calling connectdb to connect to db 
  connectDB(); 
});  