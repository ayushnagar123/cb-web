setTimeout(()=>{
    console.log(2)
},1000)
setTimeout(()=>{
    console.log(5)
},5000)
setTimeout(()=>{
    console.log(3)
},1000)

console.log(1)
//jaise hi timeout ka time poora hoga wo timeout ka time queue me daal dega and queue ko tb tk access nahi karega jb tk stack empty nahi ho jata
// 1000 5000 1000