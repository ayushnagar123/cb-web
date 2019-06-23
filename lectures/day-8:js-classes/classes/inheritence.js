/*
1. b1.__protp__ is prototype of b1
2. Band.prototype is not prototype of Band
3. function ka prototype and __proto__ dono honge
4. objects ka __proto__ hoga
*/
/*
*/
const Person={
    name:'Not Defined',
    interests: [],
    getNoOfInterests: function(){
        return this.interests.length
    }
}
// const Ayush={
//     name:'Ayush Nagar',

// }
const Ayush=Object.create(Person)