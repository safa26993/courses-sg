const mongoose = require('mongoose')
const coursSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    }
})

let Cours= mongoose.model('Cours', coursSchema, 'cours')
module.exports = Cours 