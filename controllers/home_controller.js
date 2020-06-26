const TODO = require('../models/todo');
module.exports.accessUser= function(req, res) {

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

module.exports.createUser= function(req, res) {

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



module.exports.deleteUser=function(req, res) {

        let id = req.query.id;
        TODO.findByIdAndDelete(id, function(err) {
            if (err) {
                console.log("Error in deleting an object from database");
                return;
            }
            return res.redirect('back');
        });
    }