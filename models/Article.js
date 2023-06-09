const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    },
    img: {
        type: String,
        default: 'code.png',
    }
})
let Article = mongoose.model('Article', articleSchema, 'article')
module.exports = Article 