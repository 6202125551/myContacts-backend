const asyncHandler = require('express-async-handler')
const getContacts =  asyncHandler(async (req, res) => {

    res.status(200).json({message : "get all contacts"});
})


const getContact = asyncHandler( async (req, res) => {

    res.status(200).json({message: `get the contact with id ${req.params.id}`});
})

const createContact = asyncHandler(async (req, res) => {

    console.log("The request body is : ",req.body);
    const {name, email,phone} =req.body;

    if(!name || !email|| !phone){
        res.status(400);

     throw new Error("all fields are mandatory");
    }

    res.status(201).json({message :" i am in post"});
})

const updateContact = asyncHandler( async (req, res) => {

    res.status(200).json({message: `update the contact with id ${req.params.id}`});
})

const deleteContact = asyncHandler( async (req, res) => {

    res.status(200).json({message : `delete the contact with id ${req.params.id}`});
})


module.exports = {getContacts,getContact,createContact, updateContact,deleteContact}