const express = require('express')
var app = express()

app.use((req,res,next)=>{
    console.log(req.query)
    next()
})

app.get('/',(req,res,next)=>{
    res.send("hello "+req.query.name)
    console.log(req.query.name)
    next()
})

app.use('/',(req,res,next)=>{
    console.log("middleware 1")
    next()
})

app.use('/users',(req,res,next)=>{
    console.log("middleware 2")
    next()
})

app.use('/users/',(req,res,next)=>{
    console.log("middleware 3")
    next()
})

app.get('/users/:id',(req,res)=>{
    res.send("hello " + req.params.id)
})

app.listen(3000, function(){
    console.log("listening at localhost:3000")
})