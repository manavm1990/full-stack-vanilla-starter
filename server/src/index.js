/**
 * ❗ We would not normally place multiple classes in the same file 👎🏽.
 * Instead we would 'modularize' them.
 */

class Person {
  constructor({ id, name, age } = {}) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  greet() {
    return `👋🏽. My name is, ${this.name}.`;
  }
}

// `extends` = inheritance
class Student extends Person {
  constructor({ id, name, age, major, credits, gpa, currentCourses } = {}) {
    // Inheritance
    super({ id, name, age });

    this.major = major;
    this.credits = credits;
    this.gpa = gpa;
    this.currentCourses = currentCourses;
  }

  addCourse(newCourse) {
    this.currentCourses = [newCourse, ...this.currentCourses];
  }
}

class Faculty extends Person {
  constructor({ id, name, age, tenured = false, salary }) {
    // Inheritance
    super({ id, name, age });

    this.tenured = tenured;
    this.salary = salary;
  }

  giveRaise(amount) {
    this.salary += amount;
  }
}

const mark = new Student({
  id: 1124289,
  name: "Mark Galloway",
  age: 53,
  major: "Undeclared",
  credits: {
    current: 12,
    cumulative: 20,
  },
  gpa: {
    current: 3.4,
    cumulative: 3.66,
  },
  currentCourses: ["Calc I", "Chemistry", "American History"],
});

const richard = new Faculty({
  id: 224567,
  name: "Richard Fleir",
  age: 72,
  tenured: true,
  salary: 77552,
});

console.log(mark.greet());
richard.giveRaise(5000);

console.log(mark, richard);
