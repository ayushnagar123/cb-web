const express = require('express')
const socket = require('socket.io')
const bodyParser = require('body-parser')
const http = require('http')
const Sequelize = require('sequelize')

const app = express()
const server = http.createServer(app)

const io = socket(server)

const sequelize = new Sequelize('chat','root','root',{
    dialect: 'sqlite',
    storage: './db.sqlite3'
})
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

var Users = sequelize.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user: {
        type: Sequelize.STRING,
        allowNull: false
    },
    socketid: {
        type: Sequelize.STRING,
    }
})

app.use(express.urlencoded({extended: true}))

app.get('/show',(req,res)=>{
    Users.findAll().then(users=>{
        res.json(users)
    })
})


var socid=''
io.on('connection', (socket) => {
    console.log("Connection Established ", socket.id)
    socket.emit('connected',{
        socid: socket.id
    })
    // socket.on('disconnect', () => {
    //     console.log('Disconnected')
    // })
    socid = socket.id
    socket.on("send_chat", (data) => {
        console.log("Data Recieved ", data.message)

        // socket.emit("recieve_chat", {
        //     message: data.message
        // })

        socket.broadcast.emit("recieve_chat", {
            message: data.message
        })
    })
    
})

app.post('/',(req,res)=>{
    // id: socket.id,
    console.log('in post')
    var name = req.body.username
    var socketid = socid
    console.log(name)
    console.log(socketid)
    sequelize.users.create({
        name: name,
        socketid: socketid
    })
    res.send(name)
    console.log(name)
})

app.get('/',(req,res)=>{
    console.log(__dirname)
    res.render('login')
    console.log('get')
})

app.use( express.static(__dirname + '/frontend'))
app.set('views',__dirname+'/frontend')
app.set('view engine','html')

server.listen(4848, () => {
    console.log("Server started on http://localhost:4848")
})