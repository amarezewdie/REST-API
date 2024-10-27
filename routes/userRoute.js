const express=require('express');
const { getUser, crateUser, getUsers, deleteUser, updateUser } = require('../controllers/userController');



const router=express.Router();

router.route('/').get(getUsers).post(crateUser)
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports=router;

