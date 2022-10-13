const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
    _customerId: {
        type: String
    },
    categoryName: {
        type: String
    },
    _categoryId: {
        type: mongoose.Types.ObjectId
    },
    domainName: {
        type: String
    },
    _domainId: {
        type: mongoose.Types.ObjectId
    },
    question: {
        type: String
    },
    response: {
        type: String
    }
});

const Response = mongoose.model('Response', ResponseSchema);

module.exports = Response;