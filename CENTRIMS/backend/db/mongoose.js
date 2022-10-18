const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://centrims:centrims@cluster0.4dmplhe.mongodb.net/testdb?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>console.log("Database has been connected")) 
    .catch((err)=>console.log(err));


module.exports = {
    mongoose,
    secret:'yoursecret'
}