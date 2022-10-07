const express = require ('express');
const router = express.Router();

router.get('/category/:categoryId/questions', (req, res)=> {
    Question.find({})
        .then(question => res.send(question))
        .catch((err) => console.log(err));
})

router.get('/questions/:questionId', (req, res) => {
    Question.findOne({_id: req.params.questionId})
        .then(question => res.send(question))
        .catch((err) => console.log(err));
})

router.post('/category/:categoryId/questions', (req, res) => {
    (new Question({'title': req.body.title, '_categoryId': req.params.categoryId}))
        .save()
        .then((question) => res.send(question))
        .catch((err) => console.log(err));
})

router.patch('/questions/:questionId', (req, res) => {
    Question.findOneAndUpdate({'_id': req.params.questionId}, { $set: req.body })
        .then(question => res.send(question))
        .catch((err) => console.log(err));
})

app.delete('/questions/:questionId', (req, res) => {
    Question.findByIdAndDelete(req.params.questionId)
        .then(question => res.send(question))
        .catch((err) => console.log(err));
})