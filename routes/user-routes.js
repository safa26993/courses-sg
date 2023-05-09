const express = require("express")
const router = express.Router()
const User = require('../models/User')
const passport = require('passport')

// signin form 
router.get('/signin', (req,res)=> {
    res.render('user/signin')
})

// sign in post request
router.post('/signin', (req,res)=> {
    console.log(req.body)
    res.json('sign in user ')
})

//sign up form ا
router.get('/signup', (req,res)=> {
    res.render('user/signup'
    // , {
    //    error: req.flash('error')
    // }
    )
})

// sign up post request
// router.post('/signup', (req,res)=> {
//     console.log(req.body)
//     res.json('sign up user')
// })

router.post('/signup',
   passport.authenticate('local.signup', { 
        successRedirect: '/users/profile',
        failureRedirect: '/users/signup',
        failureFlash: true 
   })
)

//profile
router.get('/profile', (req,res)=> {
    res.render('user/profile'
    // ,{
    //    success: req.flash('success') 
    // }
    )
})

//logout user
router.get('/logout', (req,res)=> {
    res.json('logout user ')
})

module.exports = router