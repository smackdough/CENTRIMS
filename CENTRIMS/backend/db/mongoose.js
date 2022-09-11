const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/testdb')
    .then(()=>console.log("Database has been connected")) 
    .catch((err)=>console.log("Error connecting to db"));


module.exports = mongoose;