const Language = require("../db/models/language");

app.get('/language', (req, res)=> {
    Language.find({})
        .then(language => res.send(language))
        .catch((err) => console.log(err));
})

app.get('/language/:languageId', (req, res) => {
    Language.findOne({_id: req.params.languageId})
        .then(language => res.send(language))
        .catch((err) => console.log(err));
})

app.post('/language', (req, res) => {
    (new Language({'title': req.body.title}))
        .save()
        .then((language) => res.send(language))
        .catch((err) => console.log(err));
})

app.patch('/language/:languageId', (req, res) => {
    Language.findOneAndUpdate({'_id': req.params.languageId}, { $set: req.body })
        .then(language => res.send(language))
        .catch((err) => console.log(err));
})

app.delete('/language/:languageId', (req, res) => {
    const deleteLanguage = (language) => {
        Question.deleteMany({_languageId: language._id})
            .then(() => language)
            .catch((err) => console.log(err));
    }
    const language = language.findByIdAndDelete(req.params.languageId)
        .then((language) => deleteLanguage(language))
        .catch((err) => console.log(err));
    res.send(language);
})