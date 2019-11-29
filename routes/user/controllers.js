const User = require('../../models/user');

module.exports = {
    addUser: (req, res) => {

        User.create(req.body).then(result =>
            res.send({
                message: 'user created',
                result
            })
        )
        .catch(error =>
            res.send({
                message: 'user failed to add',
                error: error.stack
            })
        );
    },

    deleteUser: (req, res) => {
        User.findOneAndDelete ({ _id: req.params.id}, 
            {rawResult: true})
            .then(result =>
                res.send ({
                    message: 'User Delete',
                    result
                })
            )
            .catch(error =>
                res.send ({
                    message: 'Delete User Failed',
                    error: error.stack
                })
            )
        },

    updateUser: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id },
        req.body, 
            {new : true
        })
            .then(result =>
                res.send ({
                    message: 'User Update',
                    result
                })
            )
            .catch(error =>
                res.send ({
                    message: "Failed Update User",
                    error: error.stack
                })
            );
    },

    getUser: (req, res) => {
        User.find()
            .then (result =>
                res.send ({
                    message: 'All User',
                    result
                })
            )
        .catch(error =>
            res.send ({
                message: 'Error When Get All User',
                error: error.stack
            })
        )
    },

    getUserById: (req, res) => {
        User.findById({ _id: req.params.id })
        .then(result =>
            res.send ({
                message: 'Your User Wit ID',
                result
            })
        )
        .catch(error =>
            res.send ({
                message: 'Error When Get User With Id',
                error: error.stack
            })
        );
    }
}