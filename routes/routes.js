const express = require('express'); 
const router = express.Router(); 


const { getContacts, getContact, addContact, updateContact, deleteContact } = require('../controllers/controllers.js')

router.get('/read', getContacts); 
router.get('/read/:id', getContact); 
router.post('/add', addContact); 
router.put('/update/:id', updateContact); 
router.delete('/delete/:id', deleteContact); 


module.exports = router; 