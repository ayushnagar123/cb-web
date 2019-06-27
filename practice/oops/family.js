var Family=function(name,members){
    this.name=name
    this.members=members
    this.getMembers=function(){
        return this.members.length
    }
}
var Member=function(name){
    this.name=name
}
var ayush = new Member("Ayush")
var anil = new Member("Anil")
var manav = new Member("Manav")
var nagar = new Family("Nagar",[ayush,anil])
var verma = new Family("Verma",[manav])
Member.prototype=new Family("Nagar",[ayush,anil])
Member.prototype=new Family("Verma",[manav])
console.log(nagar.getMembers())
console.log(verma.getMembers())