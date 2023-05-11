
//     // if (req.body.password != req.body.confirm_password){
//     //     return done(null, false, req.flash('error', 'passwords do not match'))
//     // } else {
//     //     User.findOne({username: username}, (err,user)=>)
//     // }

const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models/User')

//saveing user object in the session
passport.use('local.signup', new localStrategy({
    usernameField : 'username',
    emailField : 'email',
    passwordField : 'passwors',
    passReqToCallback : true
}, (req,username,email,password, done)=>{
    console.log('req.body')
}))