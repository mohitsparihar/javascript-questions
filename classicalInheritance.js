class Human {
    gender;
    constructor(g) {
        this.gender = g;
    }
}

class Student extends Human {
    rollNo;
    constructor(rollNo, gender) {
        super(gender)
        this.rollNo = rollNo;
    }
}

const st1 = new Student(1, 'M')

console.log(st1.rollNo)
console.log(st1.gender)