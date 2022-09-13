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