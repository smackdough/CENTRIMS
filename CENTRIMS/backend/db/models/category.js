const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true, 
        minLength: 3
    }
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;

