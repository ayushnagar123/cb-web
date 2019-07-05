var fs = require('fs')
var express = require('express')
var app=express()
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/',(req,res) =>{
    var user = req.body;
    fs.appendFile('./user.txt',user)
    res.send(user)
    console.log("Done")
})
app.listen(3000)