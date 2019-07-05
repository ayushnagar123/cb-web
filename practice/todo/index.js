var express = require('express')
var app = express()

app.get('/',(req,res)=>{
    res.sendFile('/home/ayushnagar123/Desktop/repos/cb-web/practice/todo/index.html')
})
app.listen(3000)