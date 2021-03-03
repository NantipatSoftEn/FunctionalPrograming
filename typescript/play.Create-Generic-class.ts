class Animal {
  move(distanceInMeters: number = 0) {
    return `Animal moved ${distanceInMeters}m.`;
  }
}

class Dog extends Animal {
  bark() {
    return "Woof Woof";
  }
}

class Cat extends Animal {
  meaw() {
    return "meaw";
  }
}
const dog = new Dog();

// dog.bark();
// dog.move(10);
// dog.bark();

function create<T extends Dog>(c: { new (): T }): T {
  return new c();
}

// ลองแบบ arrow function

const create2 = <T extends Dog>(c: { new (): T }) => new c();

const dogs = create(Dog);
const dog2 = create2(Dog);
console.log(dogs.bark());
console.log(dog2.bark());
