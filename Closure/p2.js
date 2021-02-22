let x = 20;
function foo() {
  let x = 10;
  // Closure function จดจำ environment ของ `foo`.
  function bar() {
    return x;
  }
  // return closue function
  return bar;
}
let bar = foo();
bar(); // 10, not 20!

console.log(bar());
