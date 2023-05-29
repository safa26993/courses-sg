const express = require('express')
const router = express.Router()
const Article = require('../models/Article')
const { check, validationResult, body } = require('express-validator');
const moment = require('moment')
moment().format()
const multer  = require('multer')

//define storage for the images
const storage = multer.diskStorage({
    //destination for files
    destination: function (req, file, callback) {
      callback(null, '/uploads/images');
    },
    //add back the extension
    filename: function (req, file, callback) {
      callback(null, Date.now() + file.originalname)
    }
})

//upload parameters for multer
const upload = multer({
    storage: storage,
    limits: {
      fieldSize: 1024 * 1024 * 3,
    }
})

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
            chunk : chunk,
            message: req.flash('info')
        })  
    })
})

//create new Article  
router.get('/create', (req,res)=> {
    res.render('article/create', {
    //   errors: false
         errors: req.flash('errors')
    })
})

//save article to db
router.post('/create',upload.single('image'),
[   check('title').isLength({min: 5}).withMessage('Titel should be more than 5 char'),
    check('content').isLength({min: 10}).withMessage('Article content should be more than 10 char'),
    check('date').isLength({min: 10}).withMessage('Date should valid Date'),
], 
(req,res)=> {
    console.log(request.file);
    const errors = validationResult(req)
    if( !errors.isEmpty()) {

        req.flash('errors',errors.array())
        res.redirect('/article/create')
    } else {
        let newArticle = new Article({
            title: req.body.title,
            content: req.body.content,
            date: req.body.date,
            created_at: Date.now(),
            img: req.file.filename
        })
    
        newArticle.save( (err)=> {
             if(!err) {
                 console.log('article was added')
                 req.flash('info', 'The article was created successfuly !' )
                 res.redirect('/article') 
             } else {
                 console.log(err)
             }
        })
    }
})

//show single article
router.get('/:id', (req,res)=> {
    Article.findOne({_id: req.params.id}, (err,article)=>  {
        if(!err) {
            res.render('article/show', {
                article: article
            })
        } else {
            console.log(err)
        }
    })
})

//edit route
router.get('/edit/:id', (req,res)=> {
    Article.findOne({_id: req.params.id}, (err,article)=>  {
        if(!err) {
            res.render('article/edit', {
                article: article,
                articleDate: moment(article.date).format('YYYY-MM-DD'),
                errors: req.flash('errors'),
                message: req.flash('info')

            })
        } else {
            console.log(err)
        }
    })
})

//update form
router.post('/update',
[   check('title').isLength({min: 5}).withMessage('Titel should be more than 5 char'),
    check('content').isLength({min: 5}).withMessage('Article content should be more than 50 char'),
    check('date').isLength({min: 5}).withMessage('Date should valid Date'),
], (req,res)=> {

    const errors = validationResult(req)
    if( !errors.isEmpty()) {
        req.flash('errors',errors.array())
        res.redirect('/article/edit/' + req.body.id)
    } else {
       // create object
       let newfeilds = {
            title: req.body.title,
            content: req.body.content,
            date: req.body.date
       }

       let query = {_id: req.body.id}

       Article.updateOne(query, newfeilds, (err)=> {
            if(!err) {
                req.flash('info', " The article was updated successfuly !"),
                res.redirect('/article/edit/' + req.body.id)
            } else { 
                console.log(err)
            }
       })
    }
})

//delete
router.delete('/delete/:id', (req,res)=> {

    let query = {_id: req.params.id}

    Article.deleteOne(query, (err)=> {
        if(!err) {
            res.status(200).json('deleted')
        } else {
            res.status(404).json('There was an error . article was not deleted')
        }
    })
})

module.exports = router