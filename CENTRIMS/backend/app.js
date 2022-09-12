const express = require('express');
const app = express();
const mongoose = require ('./db/mongoose');
const Category = require ('./db/models/category');
const Customer = require ('./db/models/customer');
const Question = require ('./db/models/question');
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

/*Category Endpoints*/

app.get('/category', (req, res)=> {
    Category.find({})
        .then(category => res.send(category))
        .catch((err) => console.log(err));
})

app.get('/category/:categoryId', (req, res) => {
    Category.findOne({_id: req.params.categoryId})
        .then(category => res.send(category))
        .catch((err) => console.log(err));
})

app.post('/category', (req, res) => {
    (new Category({'title': req.body.title}))
        .save()
        .then((category) => res.send(category))
        .catch((err) => console.log(err));
})

app.patch('/category/:categoryId', (req, res) => {
    Category.findOneAndUpdate({'_id': req.params.categoryId}, { $set: req.body })
        .then(category => res.send(category))
        .catch((err) => console.log(err));
})

app.delete('/category/:categoryId', (req, res) => {
    const deleteCategory = (category) => {
        Question.deleteMany({_categoryId: category._id})
            .then(() => category)
            .catch((err) => console.log(err));
    }
    const category = Category.findByIdAndDelete(req.params.categoryId)
        .then((category) => deleteCategory(category))
        .catch((err) => console.log(err));
    res.send(category);
})

/*Question Endpoints*/

app.get('/category/:categoryId/questions', (req, res)=> {
    Question.find({})
        .then(question => res.send(question))
        .catch((err) => console.log(err));
})

app.get('/questions/:questionId', (req, res) => {
    Question.findOne({_id: req.params.questionId})
        .then(question => res.send(question))
        .catch((err) => console.log(err));
})

app.post('/category/:categoryId/questions', (req, res) => {
    (new Question({'title': req.body.title, '_categoryId': req.params.categoryId}))
        .save()
        .then((question) => res.send(question))
        .catch((err) => console.log(err));
})

app.patch('/questions/:questionId', (req, res) => {
    Question.findOneAndUpdate({'_id': req.params.questionId}, { $set: req.body })
        .then(question => res.send(question))
        .catch((err) => console.log(err));
})

app.delete('/questions/:questionId', (req, res) => {
    Question.findByIdAndDelete(req.params.questionId)
        .then(question => res.send(question))
        .catch((err) => console.log(err));
})

app.listen(3000, ()=>console.log("Hello Server Connected"));