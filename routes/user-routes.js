const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('passport')

//signin user view
router.get('/signin', (req, res) => {
    res.render('user/signin', {
        error: req.flash('error')
    })
})

//signin post request
router.post('/signin',
    passport.authenticate('local.signin', {
        successRedirect: '/users/profile',
        failureRedirect: '/users/signin',
        failureFlash: true
    })
)

//signup user view
router.get('/signup', (req, res) => {
    res.render('user/signup', {
        error: req.flash('error')
    })
})

//signup post request
router.post('/signup',
    passport.authenticate('local.signup', {
        successRedirect: '/users/profile',
        failureRedirect: '/users/signup',
        failureFlash: true
    })
)

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