const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minLength: 1
    }
});

const Language = mongoose.model('Language', LanguageSchema);

module.exports = Language;

