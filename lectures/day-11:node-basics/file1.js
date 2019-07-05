console.log("inside file1 ")
const {add} =require('./algo')
console.log(add(3,2))
module.exports.v1=2
const obj={
    name:'ayush',
    age:20,
}
const {c="unknown"}=obj
console.log(c)