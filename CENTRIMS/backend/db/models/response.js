const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({ 
    customerName: {
        type: String
    },
    clientId: {
        type: String
    },
    categoryName: {
        type: String
    },
    domainName: {
        type: String
    },
    question: {
        type: String
    },
    response: {
        type: String
    },
    date: {
        type: String
    },
    _categoryId: {
        type: mongoose.Types.ObjectId
    },
    _customerId: {
        type: String
    },
    _domainId: {
        type: mongoose.Types.ObjectId
    }
});

const Response = mongoose.model('Response', ResponseSchema);

module.exports = Response;