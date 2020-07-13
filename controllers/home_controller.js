const TODO = require('../models/todo');

//access details from the database, using ejs template engine, render details in the browser 
module.exports.accessUser = function(req, res) {

    TODO.find({}, function(err, todos) {

        if (err) {
            console.log("Error in fetching task from db");
            return;
        }
        return res.render('home', {
            title: 'My TODO App',
            todo_app: todos
        });
    });
};

//create details and store details in database
module.exports.createUser = function(req, res) {

    TODO.create({
        description: req.body.description,
        catagory: req.body.catagory,
        dueDate: req.body.dueDate
    }, function(err, newTODO) {

        if (err) {
            console.log("Error in creating a task");
            return;
        } else {
            console.log("*************", newTODO);
            return res.redirect('back');
        }
    });

};


//remove details from the database 
module.exports.deleteUser = function(req, res) {

    let id = req.query.id;
    TODO.findByIdAndDelete(id, function(err) {
        if (err) {
            console.log("Error in deleting an object from database");
            return;
        }
        return res.redirect('back');
    });
}