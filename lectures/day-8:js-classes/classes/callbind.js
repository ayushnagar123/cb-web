function f1(str){
    console.log(this)
    console.log(str)
}
f1.call({x:2},"Ayush")
f1.bind({x:1})("nagar")