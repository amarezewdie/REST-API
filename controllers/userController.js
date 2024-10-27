const customError = require('../errorClass/customError');
const User=require('../models/userModel');

//get all users
const getUsers=async(req,res)=>{
 try {
    const user=await User.find();
    res.json(user);
 } catch (error) {
    res.status(404).json({msg:error.message});
 }
}
//get single user
const getUser=async(req,res,next)=>{
    try {
         const user = await User.findById(req.params.id);
         if(!user){
           throw new customError('user not found',400)
         }
         res.json(user);
        
    } catch (error) {
        next(error)
        
    }
   

}

//create user
const crateUser=async(req,res)=>{
    try {
         const user = await User.create(req.body);
         res.json(user);
    } catch (error) {
        res.status(400).json({msg:error.message});
    }
}
//update user

const updateUser=async(req,res,next)=>{
    try {
        const user=await User.findById(req.params.id);
        if(!user){
           throw new customError('user not found',400)
        }
        const updatedUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updatedUser);
    }
     catch (error) {
        next(error)
        
    }
 
}
const deleteUser=async(req,res,next)=>{
   try {
    const user=await User.findById(req.params.id);
    if(!user){
      throw new customError('user not found',400)
    }
    await User.findByIdAndDelete(req.params.id);
     res.json({msg:'user deleted'});
   } catch (error) {
    next(error)
   }
}


module.exports={getUsers,getUser,crateUser,updateUser,deleteUser};