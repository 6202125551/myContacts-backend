const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const mongoose = require('mongoose')



const registerUser =  asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const userAvailable = await User.findOne({email});
     console.log(userAvailable)
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered!!")
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('hashpassword is : ', hashedPassword)
    const user = await User.create({username, email, password:hashedPassword})
    console.log('user created', `${user}`);
   
    if(user){
        res.status(201).json({_id:user.id, email: user.email})
    }else {
        res.status(400);
        throw new Error("user data is not valid")
    }
})




const loginUser =  asyncHandler(async (req, res) => {
    res.status(200).json({message: "Login the user"})
})

const currentUser =  asyncHandler(async (req, res) => {
    res.status(200).json({message: "Current user information"})
})

module.exports = {registerUser, loginUser, currentUser}