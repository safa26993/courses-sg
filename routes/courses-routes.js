const express = require("express")
const router = express.Router()

// router.get('/', (req,res)=> {

//     res.send('courses page')
// } )
    
router.get('/', (req,res)=> {

    res.render('courses/index')
} )

router.get('/:id', (req,res)=> {

    res.render('courses/create')
} )

module.exports = router