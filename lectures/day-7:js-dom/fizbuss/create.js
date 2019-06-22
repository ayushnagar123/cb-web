let num;
window.onload= function(){
    console.log("document loaded")
    num=document.getElementById("num")
    console.log(num.value)
    let print =  document.getElementById("print")
    let list= document.getElementById("list")
    console.log("script loaded")
    print.onclick=function(){
        const start =new Date().getTime()
        let N=parseInt(num.value);
        let c3=1
        let c5=1
        for(i=1;i<=N;i++)
        {
            let item =document.createElement("li")
            item.textContent=i+" "
            if(c3==3){
                item.textContent+="fizz"
                c3=0
            }
            if(c5==5){
                item.textContent+="buzz"
                c5=0
            }
            c3++
            c5++
            list.appendChild(item)
        }
        console.log(new Date().getTime()-start)
    }
}