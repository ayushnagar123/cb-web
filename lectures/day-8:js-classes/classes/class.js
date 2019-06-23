// class name starts with capital letter convention
/*
Band is a function
b1 and b2 are object
Band.prototype==b1.__proto__
b1.__proto__==b2.__proto__
Band.prototype,b1.__proto__,b2.__proto__ are objects
b1.prototype is not defined
*/
/*
1. b1.__protp__ is prototype of b1
2. Band.prototype is not prototype of Band
3. function ka prototype and __proto__ dono honge
4. objects ka __proto__ hoga
<x>.__proto is not prototype of <x>
*/
const Band=function(name,songs){
    this.name = name
    this.songs = songs      //this is Band here
    this.getNoOfSongs= function(){
        return this.songs.length    //this is Band here
        // function fn(){
        //     this //window
        //     this!=self
        // }
    }
    
    // return this     //by default with new keyword
}
console.log(Band.prototype)
const b1 = new Band('Coldplay',['Yellow','abc'])
const b2 = new Band('Black Sabbath',['Iron man'])
// Band.prototype.constructor.getNoOfSongs()

// console.log(b1.name)
// console.log(b1.songs)
// console.log(b1.getNoOfSongs())

// console.log(b2.name)
// console.log(b2.songs)
// console.log(b2.getNoOfSongs())

// jb this call hoga to sabse pehle wo uska closest proto check karega agar nahi h to usse bahar wala proto check karega and check karta rahega jabtak mil nahi jata.agar use kahi nahi milta to wo undefined ya error deta h



/*
Rules for same proto:-
1. 2 object same constructor then __proto__ == __proto__
eg. [].__proto__==[1,2].__proto
*/