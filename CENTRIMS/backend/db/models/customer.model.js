const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    }
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;

