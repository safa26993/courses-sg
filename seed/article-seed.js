const db = require('../config/database')
const Article = require('../models/Article')

// function Article (title,description){
//     this.title = title,
//     this.description = description

// }

let newArticle = new Article({
    title: 'title test',
    description: 'description test'
})

newArticle.save( (err)=> {
    if(!err) {
        console.log('record was added')
    } else{
        console.log("err")
    }
})




