const main = () => {
  plusNumber1(5, 10, (result) => console.log(result));
  console.log(plusNumber2(3, 7));
};

function plusNumber1(num1, num2, callback) {
  callback(num1 + num2);
}
function plusNumber2(num1, num2) {
  return num1 + num2;
}

main();
