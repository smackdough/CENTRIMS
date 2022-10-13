const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minLength: 1
    }
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;

