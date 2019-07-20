const express = require('express')
const app = express()
const {db,Users} = require('./db')
const session = require('express-session')
const passport = require('passport')
// const localStrategy = require('passport-local').Strategy()

app.set('view engine','hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(
    session({
        secret: 'ayush baj,hdnakndkjajdnka',
        resave: false,
        saveUninitialized: true
    }),
)

app.use(passport.initialize())
app.use(passport.session())

app.get('/signup',(req,res)=>{res.render('signup')})
app.post('/signup',(req,res)=>{
    Users.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.pass
    }).then((user)=>{
    console.log(user)
    res.redirect('/login')
    })
    .catch((err)=>{
        console.log(err)
        res.redirect('/signup')
    })
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post(
    '/login',
    passport.authenticate('local',{
        successRedirect: '/home',
        failureRedirect: '/login',
    }),
)

function checkLoggedIn(req,res,next){
    if(req.user){
        return next()
    }
    res.redirect('/login')
}

app.get('/home',checkLoggedIn,(req,res)=>{
    res.send('welcome back')
})

app.get('/home2',checkLoggedIn,(req,res)=>{
    res.send('welcome back')
})

db.sync().then(()=>{
    app.listen(3000,()=>{
        console.log('hosted')
    })
})