const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')

const getContacts =  asyncHandler(async (req, res) => {
    const contacts = await Contact.find({})
    res.status(200).json(contacts);
})


const getContact = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    res.status(200).json(contact);
})

const createContact = asyncHandler(async (req, res) => {

    console.log("The request body is : ",req.body);
    const {name, email,phone} =req.body;

    if(!name || !email|| !phone){
        res.status(400);

     throw new Error("all fields are mandatory");
    }

    const contact = await Contact.create({
        name,email,phone
    })
    res.status(201).json(contact);
})

const updateContact = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )

    res.status(200).json(updatedContact);
})

const deleteContact = asyncHandler( async (req, res) => {
    

    Contact.findByIdAndRemove(req.params.id)
      .then(() => {
        res.status(204).send(); // Successfully deleted
      })
      .catch(err => {
        console.log('Error deleting book:', err);
        res.status(500).json({ error: 'An error occurred while deleting the book' });
      });
})


module.exports = {getContacts,getContact,createContact, updateContact,deleteContact}