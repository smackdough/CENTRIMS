const mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    email: {
        type: String
    },

    username: {
        type: String
    },

    password: {
        type: String
    },
    //saltSecret: String
});

UserSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password, 10);
}

UserSchema.methods.isValid = function(hashedpassword){
    return bcrypt.compareSync(hashedpassword, this.password);
}

const User = mongoose.model('User', UserSchema);

