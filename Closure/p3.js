function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
  };
}

let counter = createCounter();
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1

console.log(counter.increment());

console.log(counter.increment());

console.log(counter.decrement());
