// วิธีเดิม

const addFive = (a) => a + 5;
const addTen = (a) => a + 10;

// closure
const creatAdd = (a) => {
  return (b) => a + b;
};

const addFive1 = creatAdd(5);
const addTen1 = creatAdd(10);
console.log(addFive1(10));
console.log(addTen1(10));
