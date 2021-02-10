class Person {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eat somthing`);
  }
}

class Student extends Person {
  constructor(name, number) {
    super(name);
    this.number = number;
  }
  introduce() {
    console.log(`My name is ${this.name}, --- ${this.number}`);
  }
}

const s1 = new Student("xz", 12);
const p = new Person("xuzhen");

// console.log(s1 instanceof Student);
// console.log(s1.__proto__ === Student.prototype);
// console.log(p.__proto__ === Person.prototype);
console.log(s1 instanceof Person);
