const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('passport')

//signin user view
router.get('/signin', (req, res) => {
    res.render('user/signin')
})

//signin post request
router.post('/signin', (req, res) => {
    console.log(req.body)
    res.json('user in signin')
})

//signup user view
router.get('/signup', (req, res) => {
    res.render('user/signup', {
        error: req.flash('error')
    })
})

// //signup post request
// router.post('/signup', (req,res)=> {
//     console.log(req.body)
//     res.json('user in signup')
// })

//signup post request
router.post('/signup',
    passport.authenticate('local.signup', {
        successRedirect: '/users/profile',
        failureRedirect: '/users/signup',
        failureFlash: true
    }))

//profile
router.get('/profile', (req, res) => {
    res.render('user/profile', {
        success: req.flash('success')
    })
})

//logout
router.post('/logout', (req, res) => {
    res.json('logout user')
})

module.exports = router