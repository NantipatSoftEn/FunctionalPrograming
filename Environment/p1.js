var x = 10;
let foo = {
  x: 20,
  bar() {
    return this.x;
  },
  baz: () => this.x,
  qux() {
    let arrow = () => this.x;
    return arrow();
  },
};

console.log(foo.bar());
console.log(foo.baz()); // หาไม่เจอ
console.log(foo.qux());
