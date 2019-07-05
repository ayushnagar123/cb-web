const app = require('express')()
const usersroutes = require('./routes/users')

app.use('/users',usersroutes)

app.get('/',(req,res)=>{
    res.send("ok")
})

app.listen(3000)