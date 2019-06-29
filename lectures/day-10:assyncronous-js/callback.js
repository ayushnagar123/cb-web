const download = function(url,callback){
    setTimeout(()=>{
        callback(null,"Secret Data")
    },1000)
}

const resize = function(url,callback){
    setTimeout(()=>{
        callback(null,"Compressed Data")
    },2000)
}

download("github.com/ayushnagar123.jpg",function(err,file){
    if(err){
        console.log(err)
    }
    else{
    resize(file,(err,url)=>{
    console.log(file)
    })}
})