var School=function(name,board,classes,city){
    this.name=name
    this.board=board
    this.city=city
    this.classes=classes
    this.getGrades=function(){
        return this.classes.length
    }
}

var Grade=function(standard,sections){
    this.standard=standard
    this.sections=sections
    this.getSection=function(){
        return this.sections.length
    }
}

var Section=function(name,students){
    this.students=students
    this.name=name
    this.getStudent=function(){
        return this.students.length
    }
    this.getRollNO=function(){
        var x=1
        function getit(){
            x++;
        }
        return getit;
    }
}

var Student=function(name,rollno,grade,section,school){
    this.name=name
    // this.father=father
    // this.add=add
    // this.age=age
    // this.pno=pno
    this.rollno=rollno
    this.grade=grade
    this.school=school
    this.section=section
}
// class student
const student1 = new Student("Ayush",)
const student2 = new Student("Manav")
const student1 = new Student("Akshara")
const student1 = new Student("Siddharth")
const student1 = new Student("Sneha")
const student1 = new Student("Sahil")

for(i=1;i<=12;i++){

}
const school1 = new School("St. pauls","ICSE",[1,2,3,4,5,6,7,8,9,10,11,12,"Lkg","ukg","kg"],"GZB")
const school2 = new School("St. Marry","ICSE",[1,2,3,4,5,6,7,8,9,10,11,12,"Lkg","ukg","kg"],"CNB")
const school3 = new School("DPS","CBSE",[1,2,3,4,5,6,7,8,9,10,11,12,"Lkg","ukg","kg"],"NDLS")
Grade.prototype = new School(1,["A","B","C"])


const section = new Section()
const grade = new Grade()
Student.prototype = new Section()
Section.prototype= new Grade()
Grade.prototype = new School()