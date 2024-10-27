const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv').config();
const userRoute=require('./routes/userRoute');
const errorHandler = require('./errorClass/errorHandler');

const app=express();
const port=process.env.PORT||8000;

// builtin middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//route handler middleware
app.use('/api/users',userRoute);
app.use(errorHandler)
const start=async()=>{
  try {
       await mongoose.connect(process.env.mongo_url);
       console.log(`mongodb connected...`);
       app.listen(port, console.log(`server running on port ${port}...`));
  } catch (error) {
     console.log(error)
     process.exit(1);
  }
}

start();

