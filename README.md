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

// ลบ  () ของ parameter ออก
รวมถึง {},return ของ Function   
materials.map(material => material.length);
//output [8, 6, 7, 9]


//====================================
var simple = a => a > 15 ? 15 : a;

print(simple(16));
print(simple(10));
// 15 10


const a = (a,b=10) => a*b
print(a(2));
// 20


//  ต้องใส่ () ด้วย ถ้าจะ Default
const a = (a=5) => a
print(a());
```

## nested arrow functions
```javascript
let add = (x,y) => x + y;
add(2,3); //=> 5


let add = x => y => x + y;
add(2)(3);


let add = function (x) {
  return function (y) {
    return x + y;
  };
};
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

 ##  First-class function & Higher-order function
  - First-class function คือ feature ของ programming language ที่อนุญาตให้ function นั้นเป็น first-class citizen ประชากรอันดับหนึ่งของภาษา เทียบเท่ากับ value อื่น ๆ อย่างตัวเลข หรือ string เป็นต้น ซึ่งเราสามารถ assign function ให้กับตัวแปรได้ เป็น argument หรือ return value ของ function อื่นๆก็ได้

  - function ในลักษณะที่รับ argument เป็น function หรือ return function ออกมามีชื่อเรียกว่า  Higher-order function

  ## Lambda expression & Closure

  - ตัวแปร (ในเชิงคณิตศาสตร์ ซึ่งเป็นตัวแทนของค่า หรือ argument ของ function ไม่ใช่ mutable variable หรือตัวแปรแบบที่เรา update ค่าได้เรื่อยๆเวลาเขียนโปรแกรมแบบ imperative)

 - function ซึ่งใน Lambda calculus นั้น function ไม่มีชื่อ

 - application ([function][argument]) ถ้าเปรียบเทียบกับพีชคณิตก็คล้ายๆกับแทนค่า parameter ใน function เช่น ƒ(3), g(21)

 ```javascript
 const foo = [1,2,3];
 const baz = foo.map(function bar (n) { return n + 1; });
 ```

 ส่วน Closure เป็นสิ่งที่ผมสงสัยอยู่นานมาก เพราะมักจะเจอตัวอย่างแบบนี้

```javascript
 function ticker() {
   let count = 0;
   return () => count++;
 }
 let t = ticker();
 t(); // 0
 t(); // 1
 t(); // 2
 t(); // 3
 ```