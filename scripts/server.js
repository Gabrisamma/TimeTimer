const express = require('express');
const mongoose = require('mongoose');
var fixturesTime = require('./fixtures/times');
var fixturesUser = require('./fixtures/auth')

var app = express();
var Time = require('./models/Time.js');

const path = require('node:path');
var application_root = path.normalize(__dirname + '/../');

app.use(express.static(application_root));
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/MongoDB', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

app.get('/', function (req, res) {
    console.log("Device connecting");
    res.sendFile(application_root + 'index.html', {});
});


app.get('/register', function (req, res) {
    res.sendFile(application_root + 'register.html', {});
});
app.get('/login', function (req, res) {
    res.sendFile(application_root + 'login.html', {});
});

app.post('/register', fixturesUser.register);

app.post('/login', fixturesUser.login);


app.post('/datapost', function(req, res){
    fixturesTime.InsertTime(res, req.body['username'], req.body['time-input'], req.body['remaining-time'], req.body['tag-input']);
});



app.get('/dataget/:username', fixturesTime.GetTimesUser);

app.get('/dataget/:username/:tag', fixturesTime.GetTimesUserTag)

app.get('/deleteTime/:uid', fixturesTime.DeleteOneTime);

app.get('/deleteAll', fixturesTime.DeleteAllTimes);




var port = 8080;

var address = "127.0.0.1";

app.listen(port, address);