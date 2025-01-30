function Human(gender) {
    this.gender = gender;
}

Human.prototype.run = function (){
  console.log(this.gender + " is running")
}

function Student(rollNo, gender) {
    Human.call(this, gender); // Inheriting properties from Human
    this.rollNo = rollNo;
}

// Inheriting methods and properties from Human prototype
// Student.prototype = Object.create(Human.prototype);

Student.prototype = Human.prototype;

Student.prototype.giveExam = function () {
  console.log("Giving Exam");
}

// Student.prototype.constructor = Student;

// console.log(Student.prototype.constructor)

const stu = new Student(1, "M");

stu.giveExam();

console.log(stu.rollNo); // Output: 1
console.log(stu.gender); // Output: "M"
stu.run();

const h = new Human("M")

h.run();

h.giveExam();
