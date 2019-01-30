var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        trim: true,
        minlength: 1,
        type: String,
        required: true,
        lowercase: true,
    }
});

module.exports = {User};