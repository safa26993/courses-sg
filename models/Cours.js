const mongoose = require('mongoose')
const domPurifier = require('dompurify');
const { JSDOM } = require('jsdom');
const htmlPurify = domPurifier(new JSDOM().window);

const stripHtml = require('string-strip-html');
const coursSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    // description: {
    //     type: String,
    // },
    content: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    snippet: {
        type: String
    }
})
coursSchema.pre('validate', function (next) {
    //check if there is a content
    if (this.content) {
      this.content = htmlPurify.sanitize(this.content);
      this.snippet = stripHtml(this.content.substring(0, 200)).result;
    }
    next();
});

let Cours= mongoose.model('Cours', coursSchema, 'cours')
module.exports = Cours 