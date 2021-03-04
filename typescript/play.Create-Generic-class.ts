class Animal<T> {
  legs: T;
  constructor(legs: T) {
    this.legs = legs;
  }
  move(distanceInMeters: number = 0) {
    return `Animal moved ${distanceInMeters}m.`;
  }
}

class Dog extends Animal<number> {
  constructor(legs: number) {
    super(legs);
  }
  bark() {
    return "Woof Woof";
  }
}

class Cat extends Animal<number> {
  meaw() {
    return "meaw";
  }
}
// const dog = new Dog(4);

// dog.bark();
// dog.move(10);
// dog.bark();

function create<T extends Animal<number>>(c: { new (): T }): T {
  return new c();
}

// ลองแบบ arrow function

const create2 = <T extends Animal<number>>(c: { new (): T }) => new c();

// not work ?
const dogs = create(Dog);

// const dog2 = create2(Dog);
// console.log(dogs.bark());
// console.log(dog2.bark());
