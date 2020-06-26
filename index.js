const express = require('express');
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');


const app = express();

// Setting template ejs Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Setting middleware
app.use(express.static('assets'));
app.use(express.urlencoded());

// use express route
app.use('/', require('./routes/route.js'));


//fire up server
app.listen(port, function(err) {

    if (err) {
        console.log("Error in running server");
    } else {
        console.log('Yup!My server is running on port:', port);
    }

});