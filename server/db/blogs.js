const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
})


module.exports = mongoose.model('blogs', blogsSchema);