const Time = require('../models/Time');

exports.InsertTime = function(res, username, total, remaining, tag) {

    var newJson = {
        "username": username,
        "totalTime": total * 60,
        "remainingTime": remaining,
        "tag": tag
    };

    try {
        Time.create(newJson).then(newTime =>
            res.status(200).json({
              message: "User successfully created",
              newTime,
            })
        );
    } catch (err) {
        res.status(401).json({
          message: "User not successful created",
          error: error.message,
        })
    }
}


exports.GetTimesUser = function(req, res, next) {
    Time.find({ username: req.params.username }, function(err, times) {
        if (err) return next(err);
        res.send(JSON.stringify(times));
    });
}


exports.GetTimesUserTag = function(req, res, next) {
    console.log(req.params.username);
    console.log(req.params.tag);
    Time.find({ username: req.params.username, tag: req.params.tag }, function(err, times) {
        if (err) return next(err);
        res.send(JSON.stringify(times));
    });
}


exports.GetAllTimes = function(req, res, next) {
    Time.find({}, function(err, times) {
        if (err) return next(err);
        res.send(JSON.stringify(times));
    });
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

exports.DeleteOneTime = function(req, res, next) {
    Time.deleteOne({ _id: req.params.uid }, function(err) {
        if (err) {
            return next(err)
        } else {
            res.redirect('/');
        }
    });
}