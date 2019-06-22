var para=document.getElementById("para")
console.log(para)
string=''
function fn(i){
    for(let x=0;x<i;x++)
    {
        string+=x+'<br>'
    }
    para.innerHTML=string
}
// para.remove()
fn(10)
const a=document.createElement('a')
a.innerHTML="ayush"
a.setAttribute("href","https://google.com")
para.appendChild(a)