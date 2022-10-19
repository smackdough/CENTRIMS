const mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    fname: {
        type:String
    },

    lname: {
        type:String
    },

    email: {
        type: String               
    },

    username: {
        type: String            
    },

    password: {
        type: String               
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: 'USER'
    }
    //saltSecret: String
});

/*UserSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password, 10);
}

UserSchema.methods.isValid = function(hashedpassword){
    return bcrypt.compareSync(hashedpassword, this.password);
}*/

const User = mongoose.model('User', UserSchema);
module.exports = User;

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
    var query = {username: username};
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) =>{
            if(err){
                throw err;
            }
            newUser.password = hash;
            newUser.save(callback)
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) =>{
        if(err){
            throw err;
        }
        callback(null, isMatch);
    });
}



