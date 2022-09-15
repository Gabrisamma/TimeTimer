const User = require("../models/User")

exports.register = function (req, res, next) {
    var username = req.body['username'];
    var password = req.body['password'];

    try {
        User.create({username, password}).then(user =>
            res.status(200).json({
                message: "User successfully created",
                user,
            })
        );
    } catch (err) {
        res.status(401).json({
            message: "User not successful created",
            error: error.message,
        })
    }
}


exports.login = function (req, res, next) {
    var username = req.body['username'];
    var password = req.body['password'];

    User.findOne({ username, password }, function(err, user) {
        if (err) return next(err);
        res.send(JSON.stringify(user));
    });
}