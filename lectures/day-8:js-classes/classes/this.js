// this is window in global scope
// in node global is global 
const obj = {
    name: "Ayush",
    getAge: function(){
        // console.log(this==obj)
        const obj2={
            fn: function(){
                console.log(this)   //pointing to global scope
            }
        }
        
        obj2.fn()
    }
}
obj.getAge()