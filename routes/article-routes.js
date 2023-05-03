const express = require("express")
const router = express.Router()

router.get('/', (req,res)=> {

    res.send('article page')
} )
    

// router.get('/:id', (req,res)=> {

//     res.render('courses/create')
// } )

module.exports = router