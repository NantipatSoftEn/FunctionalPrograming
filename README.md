## [ JavaScript ES6 (ES2015) ](https://blog.nextzy.me/javascript-es-2015-overview-c81c5e3ce43d)

## [ What is    Functional Programming ](https://medium.com/funk-tional/hello-functional-programming-eacb0091a53c)

## แบบธรรมดา
```javascript
let numbers = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];
let squaredEvens = [];
for(let i = 0; i < numbers.length; i++) {
  let currentNumber = numbers[i];
  if(currentNumber % 2 === 0) {
    squaredEvens.push(currentNumber * currentNumber)
  }
}
```

## แบบ FP
```javascript
const numbers = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];
const isEven = n => n % 2 === 0;
const square = n => n * n;
numbers.filter(isEven).map(square);
```
```javascript
## Note
filter รับ parameter เป็น Function ที่โยนไปค่าจาก array  ไปเชคทีละตัว

## Same
```javascript
function isEven(n) { return n % 2 === 0; }
function square(n) { return n * n; }
```javascript
