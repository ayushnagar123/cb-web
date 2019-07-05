var express = require('express')
var app = express()
app.get('/',(req,res)=>{
    res.format({
        'text/plain': function () {
          res.send('hey')
        },
      
        'text/html': function () {
          res.send('<p>hey</p>')
        },
      
        'application/json': function () {
          res.send({ message: 'hey' })
        },
      
        'default': function () {
          // log the request and respond with 406
          res.status(406).send('Not Acceptable')
        }
      })
})

  app.listen(3000)