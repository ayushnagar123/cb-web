const fs = require('fs')
fs.readFile('./in.txt','utf8',(err,data)=>{
    if(!err){
        // console.log(data);
        // console.log(data.slice('\n'))
        var x=data.toString()
        // console.log(x.slice('\n'))
        const sum=data.split('\n').reduce(acc,val)=>acc+ =val=0
        // y+=x
        // console.log(x)
        fs.writeFile('./out.txt',sum,(err,result)=>{
            if(err){
                console.log(err)
            }
        })
    }
    if(err){
        console.log(err)
    }
})