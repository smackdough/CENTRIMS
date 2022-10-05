const express = require ('express');
const Domain = require('../db/models/domain');
const router = express.Router();

router.get('/category/:categoryId/domains', (req, res)=> {
    Domain.find({})
        .then(domain => res.send(domain))
        .catch((err) => console.log(err));
})

router.get('/domains/:domainId', (req, res) => {
    Domain.findOne({_id: req.params.domainId})
        .then(domain => res.send(domain))
        .catch((err) => console.log(err));
})

router.post('/category/:categoryId/domains', (req, res) => {
    (new Domain({'title': req.body.title, '_categoryId': req.params.categoryId}))
        .save()
        .then((domain) => res.send(domain))
        .catch((err) => console.log(err));
})

router.patch('/domains/:domainId', (req, res) => {
    Domain.findOneAndUpdate({'_id': req.params.domainId}, { $set: req.body })
        .then(domain => res.send(domain))
        .catch((err) => console.log(err));
})

app.delete('/domains/:domainId', (req, res) => {
    Domain.findByIdAndDelete(req.params.domainId)
        .then(domain => res.send(domain))
        .catch((err) => console.log(err));
})