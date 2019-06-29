
const id=setInterval(()=>{
var counter = document.getElementById("counter")
var i=parseInt(counter.innerText)
counter.innerHTML=i-1
console.log(--i)
if(i==0){
    counter.innerHTML="End"
    clearInterval(id)
    }
},1000)
// id()
