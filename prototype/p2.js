// Generic prototype for all letters.
let letter = {
  getNumber() {
    return this.number;
  },
};
let a = { number: 1, __proto__: letter };
let b = { number: 2, __proto__: letter };
let z = { number: 26, __proto__: letter };
console.log(
  a.getNumber(), // 1
  b.getNumber(), // 2
  z.getNumber() // 26
);
