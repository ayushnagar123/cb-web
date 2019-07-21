const express = require('express')
const app = express()

app.use('/',express.static(__dirname+'/public'))

app.get('/fare',(req,res)=>{
    const km = req.query.km
    const min = req.query.min

    //fare calculation

    res.json({
        fare: 0.00
    })
})

app.listen(4000,()=>{
    console.log('listening at http://localhost:4000')
})

module.exports = {
    app,
}