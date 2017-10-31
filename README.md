## [ JavaScript ES6 (ES2015) ](https://blog.nextzy.me/javascript-es-2015-overview-c81c5e3ce43d)
## Arrow function
```javascript
// ES6
[1, 2, 3].map(num => num * 2);

// ES5
[1, 2, 3].map(function(num) {
  return num * 2;
});

// ES6
app.get('/', (req, res) => {  
  res.json({
    message: 'Hello World'
  });
});

// ES5
app.get('/', function(req, res) {  
  res.json({
    message: 'Hello World'
  });
});


() => ‘Hello’
() => {} (แบบ code block)
(num) => num * 2
(num1, num2) => {return num1 + num2;} (แบบ code block)
() => ({ foo: ‘bar’ }) (return เป็น Object ให้ใช้ปีกกา)
```
## ลองเล่น
```javascript
const f = x => x * 2
print(f(2));

//===========================
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

//จัดให้ดูง่ายสำหรับผม
const a = materials.map(
    function(material) {
        return material.length;
    }
);

//เปลื่อน function เป็น =>  ไว้ด้านหลังแทน
const b = materials.map(
    (material) => {
      return material.length;
    }
);

// ลบ  () ของ parameter ออก รวมถึง {},return ของ Function   
materials.map(material => material.length);
//output [8, 6, 7, 9]


//====================================
var simple = a => a > 15 ? 15 : a;

print(simple(16));
print(simple(10));
// 15 10
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
