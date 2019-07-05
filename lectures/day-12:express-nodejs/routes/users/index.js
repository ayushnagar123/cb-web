const express = require('express')

const router = express.Router()

const users=[{
    name:'ayush',
    age:20,
},
{
    name:'manav',
    age:'19',
}]

router.get('/me',(req,res)=>{
    res.send("HI ayush")
})

router.get('/:id',(req,res)=>{
    res.send("hI "+req.params.id)
})