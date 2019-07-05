var express = require('express')
var app=express()
function next(){
    console.log("middleware called")
}
app.get('/',function(req,res){
    next()
})
app.listen(3000)