/*
1. b1.__protp__ is prototype of b1
2. Band.prototype is not prototype of Band
3. function ka prototype and __proto__ dono honge
4. objects ka __proto__ hoga
*/
/*
*/
const Band={
    name:'Not Defined',
    songs: [],
    getNoOfSongs: function(){
        return this.songs.length
    }
}
const b1=Object.create(Band)