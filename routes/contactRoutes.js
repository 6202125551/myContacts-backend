const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

    res.status(200).json({message : "get all contacts"});
})

router.get('/:id', (req, res) => {

    res.status(200).json({message: `get the contact with id ${req.params.id}`});
})

router.post('/', (req, res) => {

    res.status(200).json({message :" i am in post"});
})

router.put('/:id', (req, res) => {

    res.status(200).json({message: `update the contact with id ${req.params.id}`});
})

router.delete('/:id', (req, res) => {

    res.status(200).json({message : `delete the contact with id ${req.params.id}`});
})


module.exports = router;