const express = require('express')
const app = express()

// app.set('views',mytemplate)  if want to change name of views folder to mytemplate
app.set('view engine','hbs')
var count=0;
app.get('/',(req,res)=>{
    count++;
    res.render('index',{
        count,
            // nav: [
            //   {url: 'foo', test: true, title: 'bar'},
            //   {url: 'bar'},
            //   {url: 'ayush',test:true, title:'ayush'}
            // ]
    })
    //     res.send(`
//     <html>
//     <body>
//         <p>Hello</p>
//     </body>
//     </html>
//     `)
})
app.use('/assets', express.static(__dirname+'/public'))
app.listen(3000)