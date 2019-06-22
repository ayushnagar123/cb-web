// obj={
    // key: value;
    //key can only be string
// }
//objects work like hashmaps
var obj={
    a: 2,
    x:{
        name: 'ayush'
    }
    flag: true,
// VM1193:6 Uncaught SyntaxError: Unexpected identifier
var obj={
    a: 2,
    x:{
        name: 'ayush'
    },
    flag: true,
}
undefined
obj.a
2
obj.x
{name: "ayush"}
obj.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
obj.x.name
"ayush"
delete obj
true