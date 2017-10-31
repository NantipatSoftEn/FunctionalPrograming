## [ JavaScript ES6 (ES2015) ](https://blog.nextzy.me/javascript-es-2015-overview-c81c5e3ce43d)
## Arrow function
```javascript
// ES6
[1, 2, 3].map(num => num * 2);

// ES5
[1, 2, 3].map(function(num) {
  return num * 2;
});

app.get('/', (req, res) => {  
  res.json({
    message: 'Hello World'
  });
});
```

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

## Note
filter รับ parameter เป็น Function ที่โยนไปค่าจาก array  ไปเชคทีละตัว

## Same
```javascript
function isEven(n) { return n % 2 === 0; }
function square(n) { return n * n; }
```

## หัวใจสำคัญของ Functional Programming
หลีกเลี่ยง side-effect หรือผลข้างเคียงที่จะเกิดต่อ function อื่นและต่อตัวเอง

- เมื่อมี input ค่าหนึ่ง จะได้ต้องได้ output เท่าเดิมเสมอ

-  ไม่ไปเปลี่ยนแปลงค่าของตัวแปรจำพวก global variable หรือ static variable
