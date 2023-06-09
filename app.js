const express = require('express'); //expressاستدعاء المكتبة
const app = express();
const db = require('./config/database')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const passportSetup = require('./config/passport-setup')

/// bring ejs tamplate
app.set('view engine', 'ejs')

// bring body parser 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/// bring static 
app.use(express.static('public'))
app.use(express.static('uploads'))
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
app.use(passport.initialize())
app.use(passport.session())

//home page
app.get('/', (req,res)=> {
    res.redirect('/cours')
})

/// bring cours routes
const cours = require('./routes/cours-routes')
app.use('/cours', cours)
cours
/// bring articel routes
const article = require('./routes/article-routes')
app.use('/article', article)

/// bring user routes
const users = require('./routes/user-routes');
app.use('/users', users)

/// bring game routes
const game = require('./routes/game-routes');
app.use('/game',game)

///listen to port 3000
app.listen(3003, ()=> {
    console.log('server is running on port 3000');
});