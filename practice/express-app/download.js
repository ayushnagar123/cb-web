var express= require('express')
var app = express()
var url="/home/ayushnagar123/Desktop/Qoni.jpg"
app.get('/',(req,res)=>{
    res.download(url, 'cat.jpg')

    res.download(url, 'cat.jpg', function (err) {
      if (err) {
        // Handle error, but keep in mind the response may be partially-sent
        // so check res.headersSent
      } else {
        // decrement a download credit, etc.
      }
    })
})
app.listen(3000)