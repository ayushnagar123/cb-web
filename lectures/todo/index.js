const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))

const todo=[
    {
        title:'none',
        date:'00:00:00',
    }
]

app.get('/todo',(req,res)=>{
    res.send(todo)
})

app.post('/todo',(req,res)=>{
    todo.push({
        id: todo.length+1,
        title:req.body.title,
        striked:!!req.body.striked
    })
    res.sendStatus(200)
    console.log(todo)
    
})

app.patch('/:id',(req,res)=>{
    const todos = todo.find(list=>todo.id==req.params.id)
    todos.title = req.body.title
    todos.striked=req.body.striked
    res.send(todo)
})

app.delete('/todo/:id',(req,res)=>{
    if(todo[req.params.id].striked){
        
    }
})
app.listen(3000)