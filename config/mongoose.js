//require the library
const mongoose = require('mongoose');

//connect to the  database
mongoose.connect('mongodb://localhost/todo_app_db', { useNewUrlParser: true });

//acquire  the connection(check if is it successful)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// up and running then print the message
db.once('open', function() {
    console.log("connected to database ::mongoDB");
});