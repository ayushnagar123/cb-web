const express = require('express')
const app = express()
const http = require('http')
const socket = require('socket.io')

const server = http.createServer(app)

const io = socket(server)

io.on('connection', function(socket){
    console.log('a user connected',socket.id);
  });

app.set('view engine','hbs')
app.set('views',__dirname+'/views')

app.get('/',(req,res)=>{
    res.render('index')
})
app.listen(3000)