const express = require('express'); //expressاستدعاء المكتبة
const app = express();
const db = require('./config/database')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const passportSetup = require('./config/passport-setup')



// mongoose.set('strictQuery', false)
// mongoose.set('strictQuery', true)

/// bring ejs tamplate
app.set('view engine', 'ejs')

// // bring body parser 
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

/// bring static اضافة ملف الpublic يظهر في المشروع
app.use(express.static('public'))
app.use(express.static('node_modules'))

//session and flash config
app.use(session({
    secret: 'lorem ipsum',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60000 * 15}
}))
app.use(flash())

// bring passport 
// app.use(passport.initialize())
// app.use(passport.session())

app.get('/', (req,res)=> {
    res.redirect('/courses')
})

/// bring courses routes
const courses = require('./routes/courses-routes')
app.use('/courses', courses)

/// bring articel routes
const article = require('./routes/article-routes')
app.use('/article', article)

/// bring user routes
const users = require('./routes/user-routes');
const { default: mongoose } = require('mongoose');
app.use('/users', users)

///listen to port 3000
app.listen(3000, ()=> {
    console.log('server is running on port 3000');
});