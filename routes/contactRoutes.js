const express = require('express');

const router = express.Router();
const {getContact,getContacts,createContact,updateContact,deleteContact} = require('../controllers/contactController')

router.get('/', getContacts);

router.get('/:id', getContact)

router.post('/',createContact )

router.put('/:id', updateContact)

router.delete('/:id',deleteContact)


module.exports = router;