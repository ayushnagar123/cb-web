const fs =require('fs')

fs.writeFile('./file.txt',"Hello World",(err,result)=>{
    if(err){
    console.log(err)
    }
})
fs.writeFileSync('./file_sync.txt',"bye")
console.log("done")
