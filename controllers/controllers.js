const mongoose = require('mongoose');
const Contact = require('../models/Contact'); 

const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({});
        res.status(200).json({ "msg": "contacts fetched successfully", contacts })
    } catch (e) {
        console.log(e)
        res.send({ e })
    }
}

const getContact = async (req, res) => {
    try {
        const contact = await Contact.findById({ _id: req.params.id });
        res.status(200).json({ "msg": "contact fetched successfully", contact })
    } catch (e) {
        console.log(e)
        res.send({ e })
    } 
}

const addContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
       
        await contact.save(); 
        res.status(200).json({ "msg": "contact added successfully", contact })
    } catch (e) {
        console.log(e)
        res.send({ e })
    }
}

const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate({ _id: req.params.id }, (req.body), { new: true });
        res.status(200).json({ "msg": "contact updated successfully", contact })
    } catch (e) {
        console.log(e)
        res.send({ e })
    }
}



const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ "msg": "contact deleted successfully", contact })
    } catch (e) {
        console.log(e)
        res.send({ e })
    }
}


module.exports = {
    addContact, 
    getContacts,
    getContact, 
    updateContact, 
    deleteContact
}

