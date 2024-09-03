class Car {
  #name;
  #modal;
  constructor(name, modal) {
    this.#name = name;
    this.#modal = modal;
  }

  getName() {
    return this.#name;
  }

  getModal() {
    return this.#modal;
  }
}

const myCar = new Car("Toyota", "Camry");
console.log(myCar.getName());
console.log(myCar.getModal());
