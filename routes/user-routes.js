const express = require("express")
const router = express.Router()
const User = require('../models/User')

// sign in form تسجيل الدخول
router.get('/signin', (req,res)=> {
    res.render('user/signin')
})

// sign in post request
router.post('/signin', (req,res)=> {
    res.json('sign in user ')
})

//sign up form الاشتراك
router.get('/signup', (req,res)=> {
    res.render('user/signup')
})

//sign up post request
router.post('/signup', (req,res)=> {
    console.log(req.body)
    res.json('sign up user  ')
})

//profile
router.get('/profile', (req,res)=> {
    res.render('user/profile')
})

//logout user
router.get('/logout', (req,res)=> {
    res.json('logout user ')
})

module.exports = router

