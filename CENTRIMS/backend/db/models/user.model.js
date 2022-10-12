const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    fullName: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String
    },
    saltSecret: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;