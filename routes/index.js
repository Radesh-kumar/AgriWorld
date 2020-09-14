const express = require('express');
const router = express.Router();

const Farming_methods = require("../models/Farming_methods");
const Technology = require("../models/Technology");
const Health = require("../models/Health");
const Problems = require("../models/Problems");

router.get('/', (req, res) => {
    res.render('index.html')
});

//All Post

router.get('/technology', (req, res) => {
    Technology.find({}).sort('-date').exec(function (err, posts) { res.json(posts) });
});

router.get('/farming_methods', (req, res) => {
    Farming_methods.find({}).sort('-date').exec(function (err, posts) { res.json(posts) });
});

router.get('/health', (req, res) => {
    Health.find({}).sort('-date').exec(function (err, posts) { res.json(posts) });
});

router.get('/problems', (req, res) => {
    Problems.find({}).sort('-date').exec(function (err, posts) { res.json(posts) });
});

//Single Posts

router.get('/technology/:id', (req, res) => {
    Technology.find({_id:req.params.id}).sort('-date').exec(function (err, posts) { res.json(posts) });
});

router.get('/farming_methods/:id', (req, res) => {
    Farming_methods.find({ _id: req.params.id}).sort('-date').exec(function (err, posts) { res.json(posts) });
});

router.get('/health/:id', (req, res) => {
    Health.find({ _id: req.params.id}).sort('-date').exec(function (err, posts) { res.json(posts) });
});

router.get('/problems/:id', (req, res) => {
    Problems.find({ _id: req.params.id}).sort('-date').exec(function (err, posts) { res.json(posts) });
});

//Edit Posts

router.post("/editpost/:id", (req, res, next) => {
    console.log(req.body)
    console.log(req.body.category)
    //For TEchnology
    if (req.body.category === '1') {
        Technology.findOneAndUpdate({ _id: req.params.id },{
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            imageUrl: req.body.imageUrl,
        }).sort('-date').exec(function (err, posts) { res.json(posts) });
    }
    //For Farming_methods
    else if (req.body.category === '2') {
        Farming_methods.findOneAndUpdate({ _id: req.params.id},{
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            imageUrl: req.body.imageUrl,
        } ).sort('-date').exec(function (err, posts) { res.json(posts) });

    }
    //For Health
    else if (req.body.category === '3') {
        Health.findOneAndUpdate({ _id: req.params.id},{
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            imageUrl: req.body.imageUrl,
        } ).sort('-date').exec(function (err, posts) { res.json(posts) });
    }
    //For Problems
    else if (req.body.category === '4') {
        Problems.findOneAndUpdate({ _id: req.params.id},{
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            imageUrl: req.body.imageUrl,
        } ).sort('-date').exec(function (err, posts) { res.json(posts) });
    }

});

//Delete Posts

router.delete('/deletepost/technology/:id', (req, res) => {
    Technology.deleteOne({ _id: req.params.id }).exec(function (err, posts) { res.json(posts) });
});

router.delete('/deletepost/farming_methods/:id', (req, res) => {
    Farming_methods.deleteOne({ _id: req.params.id }).exec(function (err, posts) { res.json(posts) });
});

router.delete('/deletepost/health/:id', (req, res) => {
    Health.deleteOne({ _id: req.params.id }).exec(function (err, posts) { res.json(posts) });
});

router.delete('/deletepost/problems/:id', (req, res) => {
    Problems.deleteOne({ _id: req.params.id }).exec(function (err, posts) { res.json(posts) });
});

module.exports = router;