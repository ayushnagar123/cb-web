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
        let str=""
        let N=parseInt(num.value);
        for(i=1;i<=N;i++)
        {
            if(i%3==0 && i%5==0){
                str+='<li>'+i+" "+"fizzbuss</li>"
            }
            else if(i%3==0){
                str+='<li>'+i+" "+"fizz</li>"
            }
            else if(i%5==0){
                str+='<li>'+i+" "+"buss</li>"
            }
            
            else{
                str+="<li>"+ i +"</li>"
            }
        }
        list.innerHTML=str
        console.log(new Date().getTime()-start)
    }
}