// function are first class citizens in js
// functions can be passed and returned
function printValues(i,onDone){
    for(x=0;x<10;x++)
    {
        console.log(x)
    }
    return onDone()
}
function afterCompletion(){
    console.log("Done")
}
var after=printValues(0,afterCompletion)
after()