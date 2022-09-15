var mongoose = require('mongoose');

const TimeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    totalTime: {
        type: Number,
        required: true,
    },
    remainingTime: {
        type: Number,
        required: true,
    },
    tag: String
});

module.exports = mongoose.model('Time', TimeSchema);