const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true
    }
});

const Problems = mongoose.model('Problems', PostsSchema);

module.exports = Problems;