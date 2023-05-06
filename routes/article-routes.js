const express = require("express")
const router = express.Router()
const Article = require('../models/Article')
// const {article} = require("jquery")

router.get('/', (req,res)=> {
    Article.find({}, (err,articles)=> {
        // res.json(articles)
        let chunk = []
        let chunkSize = 3
        for(let i =0 ; i < articles.length ; i+=chunkSize ){
            chunk.push(articles.slice( i, chunkSize + i))
        }
        // res.json(chunk)
         res.render('article/index', {
            chunk : chunk
        })  
    })
})

//create new Article    
router.get('/create', (req,res)=> {
    res.render('article/create')
})


//show single article
router.get('/:id', (req,res)=> {
    // console.log(req.params.id)
    // res.render('article/show')
    Article.findOne({_id: req.params.id}, (err,article)=>  {
        if(!err) {
            res.render('article/show', {
                article: article
            })
        }
    })
})


module.exports = router