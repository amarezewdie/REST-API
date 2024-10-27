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
const getUser=async(req,res)=>{
    try {
         const user = await User.findById(req.params.id);
         if(!user){
            return res.status(400).json({msg:'user not found'});
         }
         res.json(user);
        
    } catch (error) {
        res.status(500).json({msg:error.message});
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

const updateUser=async(req,res)=>{
    try {
        const user=await User.findById(req.params.id);
        if(!user){
            return res.status(400).json({msg:'user not found '});
        }
        const updatedUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updatedUser);
        
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
 
}
const deleteUser=async(req,res)=>{
   try {
    const user=await User.findById(req.params.id);
    if(!user){
       return res.status(400).json({msg:'user not found'});
    }
    await User.findByIdAndDelete(req.params.id);
     res.json({msg:'user deleted'});
   } catch (error) {
    res.status(500).json({msg:error.message});
   }
}


module.exports={getUsers,getUser,crateUser,updateUser,deleteUser};