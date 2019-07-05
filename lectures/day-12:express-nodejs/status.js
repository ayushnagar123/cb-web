var express = require('express')
var app = express()

app.get('/200',(req,res)=>{
    res.sendStatus(200)     //Ok
})
app.get('/300',(req,res)=>{
    res.sendStatus(300)     //Multiple Choices
})
app.get('/301',(req,res)=>{
    res.sendStatus(301)     //Moved Permanently
})
app.get('/302',(req,res)=>{
    res.sendStatus(302)     //Found
})
app.get('/400',(req,res)=>{
    res.sendStatus(400)     //Bad Request
})
app.get('/401',(req,res)=>{
    res.sendStatus(401)     //Unauthorized
})
app.get('/402',(req,res)=>{
    res.sendStatus(402)     //Payment Required
})
app.get('/403',(req,res)=>{
    res.sendStatus(403)     //Forbidden
})
app.get('/404',(req,res)=>{
    res.sendStatus(404)     //Not Found
})
app.get('/501',(req,res)=>{
    res.sendStatus(501)     //Not Implemented
})
app.get('/502',(req,res)=>{
    res.sendStatus(502)     //Bad Gateway
})
app.listen(3000)