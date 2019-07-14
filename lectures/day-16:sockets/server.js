const express = require('express')
const app = express()
const socket = require('socket.io')
const http = require('http')

const server = http.createServer(app)

const io = socket(server)

io.on('connection',(socket)=>{
    console.log('connection established',socket.id)
    // xyz.emit('connected')
    
    // xyz.on('disconnect',()=>{
    //     console.log('Disconnected',xyz.id)
    // })

    socket.on('send_chat',(data)=>{
        console.log('data recieved',data.message)

        io.emit("recieve_chat",{
            message: data.message
        })
    })
})

app.use('/',express.static(__dirname+'/frontend'))


server.listen(3000,()=>{
    console.log('listening at http://localhost:3000')
})