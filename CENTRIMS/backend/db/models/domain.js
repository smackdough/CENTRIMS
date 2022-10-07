const mongoose = require("mongoose");

const DomainSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true, 
        minLength: 3
    },
    _categoryId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});

const Domain = mongoose.model('Domain', DomainSchema);

module.exports = Domain;

