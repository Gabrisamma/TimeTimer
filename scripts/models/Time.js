var mongoose = require('mongoose');

var TimeSchema = new mongoose.Schema({
  totalTime: Number,
  remainingTime: Number,
  tag: String
});

module.exports = mongoose.model('Time', TimeSchema);