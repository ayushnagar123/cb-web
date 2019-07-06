const express = require('express')
const fs = require('fs')
const route = express.Router()

const todos = []

function writing(){
    var td= JSON.stringify(todos)
    fs.writeFile("todos.txt",td,(req,res,err)=>{
        if(err){
            console.log(err)
        }
    })
}

route.get('/', (req, res) => {
    res.send(todos)
})

route.post('/', (req, res) => {
    todos.push({
        id: todos.length + 1,
        title: req.body.title,
        striked: !!req.body.striked
    })
    writing()
    res.sendStatus(200)
})

route.patch('/:id', (req, res) => {
    const todo = todos.find(user => user.id == req.params.id)
    todo.title = req.body.title
    todo.striked = req.body.striked
    writing()
    res.sendStatus(200)
})

route.delete('/:id', (req, res) => {
    const selectedTodo = todos.find(user => user.id == req.params.id)
    if (!selectedTodo.striked) {
        return res.status(403).send('Can only delete striked todos')
    }
    todos = todos.filter(todo => todo.id != selectedTodo.id)
    writing()
    res.sendStatus(200)
})

module.exports = route