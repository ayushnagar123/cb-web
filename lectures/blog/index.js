const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('views',__dirname+'/views')
app.set('view engine','hbs')
app.use(express.static(__dirname+'/public'))

const blogs=[{
    id: 1,
    author: 'Author 1',
    title:'Blog 1',
    body: 'Hello 1'
},
{
    id: 2,
    author: 'Author 2',
    title:'Blog 2',
    body: 'Hello 2'
}]

var id=3;

app.post('/',(req,res)=>{
    const newBlog=[{
    id: id++,
    title: req.body.title,
    author: req.body.author,
    body: req.body.body
    }]
    blogs.push(newBlog)
    res.render('index',{
        blogs,
        selectedBlog:{
            body: body,
            author: author,
            title: title
        }
    })
})

app.get('/add',(req,res)=>{
    res.render('add')
})

app.get('/',(req,res)=>{
    const blogId = req.query.blog
    const selectedBlog = blogs.find(blog=>blog.id==blogId)
    res.render('index',{
        blogs, selectedBlog
    })
})


app.listen(5000)