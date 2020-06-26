const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: true
    }
},{timestamps:true});

const TODO = mongoose.model('TODO', todoSchema);

module.exports = TODO;