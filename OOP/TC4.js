class Vehicle {
  name;
  constructor(name) {
    if (this.constructor === Vehicle) {
      throw new Error("Cannot instantiate an abstract class.");
    }
    this.name = name;
  }

  start() {
    throw new Error("Abstract method 'start()' must be implemented.");
  }
}

class Car2 extends Vehicle {
  start() {
    console.log(`${this.name} engine started. Car is ready to go!`);
  }
}

class Bike extends Vehicle {
  start() {
    console.log(`${this.name} engine started. Bike is ready to ride!`);
  }
}

const myCar2 = new Car2("Toyota");
const myBike = new Bike("Honda");

myCar2.start();
myBike.start();

// const vehicle = new Vehicle("Generic Vehicle"); // Error: Cannot instantiate an abstract class.
