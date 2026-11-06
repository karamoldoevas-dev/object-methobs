// Object
 
const student={
    name:"John",
    age:22,
    hobbiest:["Reading", "Baseball"],
    parents: {
        mother: {
            name: "Anna",
            age: 55
        },
        fathher: {
            name: "Steve",
            age:56
        }

    }
    getInfo:function(){
            console.log(`This is ${this.name} and his is ${jis.parents.father.name}'s son`);

        
    }
}
console.log(student.parents.mother.name);
