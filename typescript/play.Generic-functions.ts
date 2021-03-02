function identity<T>(arg: T): T {
  return arg;
}

const identity2 = <T>(arg: T) => arg; // return T จะหายไป

console.log(identity<string>("Army"));
console.log(identity2<string>("Army2"));

// แก้ปัญหา โดย
const identity3 = <T extends unknown>(arg: T) => arg;

console.log(identity2<string>("Army3"));
