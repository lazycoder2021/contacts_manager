const express = require('express'); 
const app = express(); 
require('dotenv').config({}); 
const mongoose = require('mongoose'); 

const router = require('./routes/routes'); 

app.use(express.json()); 
app.use('/', router);
app.use(express.static('public')); 




app.listen(process.env.PORT, function () {
    console.log(`server up and running @ ${process.env.PORT}`)

    //mongoose.connect('mongodb://localhost:27017/contactsMgr'); 

    mongoose.connect('mongodb+srv://dbuser:dbuser@cluster0.pojzjzr.mongodb.net/?retryWrites=true&w=majority');
    mongoose.connection.on('open', function () {
        console.log('db connected...')
    })
})


