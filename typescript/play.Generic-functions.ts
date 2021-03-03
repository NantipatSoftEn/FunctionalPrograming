function identity1<T>(arg: T): T {
  return arg;
}

const identity2 = <T>(arg: T) => arg; // return T จะหายไป

// แก้ปัญหา โดย

const identity3 = <T extends unknown>(arg: T) => arg;

function identity4<T>(arg: T): T {
  return arg;
}

console.log(identity1<string>("Army"));
console.log(identity2<string>("Army2"));
console.log(identity2<string>("Army3"));

// เขียนแบบข้างบนจะนำมาสู่ interface แบบนี้
interface GenericIdentityFn1 {
  <T>(arg: T): T;
}

// เราย้าย generic paramter ไป interface ทั้งหมด
interface GenericIdentityFn2<T> {
  (arg: T): T;
}

let myIdentity1: { <T>(arg: T): T } = identity3;
console.log(myIdentity1<string>("myIdentity1"));

let myIdentity2: GenericIdentityFn1 = identity3;
console.log(myIdentity2<string>("myIdentity2"));

let myIdentity3: GenericIdentityFn2<string> = identity3;
console.log(myIdentity3("myIdentity3"));
