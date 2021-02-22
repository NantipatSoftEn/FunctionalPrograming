const plusNumber = (num1, num2) => {
  let result = num1 + num2;
  return (number) => result + number;
};

let result = plusNumber(10, 20)(7);
//  or
console.log(result);

functionResult = plusNumber(10, 20);

console.log(functionResult); // log จะได้ function

result2 = functionResult(12);
console.log(result2); // log 42
