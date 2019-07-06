const express = require('express')
const app = express()

const tasks=[]
app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
    res.render('todo',{
        tasks
    })
})
app.post('/',(req,res)=>{
    tasks.push(req.body.task)
    res.redirect('/')
})
app.get('/todos',()=>{
    res.send(tasks)
})
app.post('/todos',()=>{
    tasks.push(req.body.task)
    res.redirect('/todos')
})
app.listen(3000,()=>{
    console.log('listening at http://localhost:3000')
})