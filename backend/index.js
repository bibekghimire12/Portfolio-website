import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/database.js";
import userRoute from './Route/userRoute.js';


dotenv.config({})
const app = express();
let PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', userRoute);



app.listen(PORT, ()=>{
  connectDb() 
  console.log(`Server running at Port ${PORT}`);
});



// Create a transporter object





// routing 
