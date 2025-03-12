// Class Human has gender property.

class Human {
    gender;
    constructor(g) {
        // provideing initial value to gender
        this.gender = g;
    }
}

//Class Student extending Human class
class Student extends Human {
    rollNo;
    constructor(rollNo, gender) {
        // Providing initial value to rollNo and gender.
        // As gender property is in the parent calss , we use super keyword to intitialize its value
        super(gender)
        this.rollNo = rollNo;
    }
}

const st1 = new Student(1, 'M')

console.log(st1.rollNo)
console.log(st1.gender)