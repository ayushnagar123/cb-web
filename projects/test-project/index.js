var express = require('express')

const app = express()
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const users=[]
app.get('/user', function (req, res) {
  res.send(`
  <html>
  <body><p style='color:red'>Hello World</p></body> 
  </html>
  `)
})
app.get('/time', function (req, res) {
  res.send(new Date())
})

app.post('/',(req,res)=>{
  const user = req.body
  users.push(user)
  res.sendStatus(200)
})
 
app.listen(3000)