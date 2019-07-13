const express = require('express')
const app = express()
const socket = require('socket.io')
const http = require('http')

const server = http.createServer(app)

const io = socket(server)

io.on('connection',(xyz)=>{
    console.log('connection established',xyz.id)
})

app.use('/',express.static(__dirname+'/frontend'))


server.listen(3000,()=>{
    console.log('listening at http://localhost:3000')
})