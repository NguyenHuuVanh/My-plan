class Person {
  name;
  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    return `my name is ${this.name}`;
  }
}

class Professor extends Person {
  #teaches;
  #paper;
  constructor(name, teaches, paper) {
    super(name);
    this.#teaches = teaches;
    this.#paper = paper;
  }

  grader() {
    return `I teach ${this.#teaches} and I grade ${this.#paper}`;
  }
}

class Student extends Person {
  #year;
  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    return `I am a student in ${this.#year} year`;
  }
}

const professor = new Professor("math", "John Doe", "5");

console.log(professor.introduceSelf());

console.log(professor.grader());

const student = new Student("Alice Doe", 3);

console.log(student.introduceSelf());
