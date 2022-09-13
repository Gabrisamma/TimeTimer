var mongoose = require('mongoose');
var Time = require('../models/Time.js');

exports.InsertTime = function(total, remaining, tag) {
    if (total == null || remaining == null) {
        console.log("Not enough data to insert");
        return;
    }

    var newJson = {
        "totalTime": total * 60,
        "remainingTime": remaining,
        "tag": tag
    };

    Time.collection.insertOne(newJson);
}


exports.GetAllTimes = function(req, res, next) {
    Time.find({}, function(err, times) {
        if (err) return next(err);
        res.send(JSON.stringify(times));
    })
}


exports.DeleteAllTimes = function(req, res, next) {
    Time.deleteMany({}, function(err) {
        if (err) {
            return next(err)
        } else {
            res.redirect('/');
        }
    });
}