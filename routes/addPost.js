const express = require('express');
const router = express.Router();

const Farming_methods = require("../models/Farming_methods");
const Technology = require("../models/Technology");
const Health = require("../models/Health");
const Problems = require("../models/Problems");

router.post("/", (req, res, next) => {
    console.log(req.body)
    console.log(req.body.category)
    //For TEchnology
    if (req.body.category==='1'){
        const Post = new Technology({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            imageUrl: req.body.imageUrl
        });
        Post
            .save()
            .then(result => {
                console.log(result);
                res.status(201).send({
                    message: "Created post successfully",
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    }
    //For Farming_methods
    else if (req.body.category === '2'){
        const Post = new Farming_methods({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            imageUrl: req.body.imageUrl
        });
        Post
            .save()
            .then(result => {
                console.log(result);
                res.status(201).send({
                    message: "Created post successfully",
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });

    }
    //For Health
    else if (req.body.category === '3') { 
        const Post = new Health({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            imageUrl: req.body.imageUrl
        });
        Post
            .save()
            .then(result => {
                console.log(result);
                res.status(201).send({
                    message: "Created post successfully",
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    }
    //For Problems
    else if (req.body.category === '4') { 
        const Post = new Problems({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            imageUrl: req.body.imageUrl
        });
        Post
            .save()
            .then(result => {
                console.log(result);
                res.status(201).send({
                    message: "Created post successfully",
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    }
    // res.status(200).send({"message":"data recieved"})
    // console.log(req.body.category)

});

module.exports = router;