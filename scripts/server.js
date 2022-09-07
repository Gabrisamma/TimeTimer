var express = require('express');
var mongoose = require('mongoose');
var fixtures = require('./fixtures/times');

var app = express();
var Time = require('./models/Time.js');

const path = require('node:path');
var application_root = path.normalize(__dirname + '/..');

app.use(express.static(application_root));
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/MongoDB', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
        //fixtures.populateDB(); /* POPOLO IL DB SE VUOTO */
    }
});

app.get('/', function (req, res) {
    console.log("Device connecting");
    res.render('index', {});
});

app.post('/datapost', function(req, res){
    console.log(req.body['time-input']);
    fixtures.InsertTime(req.body['time-input'], null, req.body['tag-input']);
    //res.send(JSON.stringify(req.body));
});


app.get('/dataget', function(req, res){
    /*console.log(req.body);
    res.send(JSON.stringify(req.body));*/
    fixtures.GetAllTimes();
});


var port = 8080;

var address = "127.0.0.1";

app.listen(port, address);