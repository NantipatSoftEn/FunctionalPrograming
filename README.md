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

 เขาบอกว่า Closures คือ functions ที่อ้างอิง free variables เจ้า free variables เนี่ย มันคือตัวแปรที่ไม่ได้ถูกประกาศไว้ใน parameter จากตัวอย่างด้านบน จะเห็นได้ว่า () => count++ ไม่มี parameter เลย แต่มีตัวแปร count ซึ่งโดยปกติแล้วเมื่อ execute ticker เสร็จ เจ้า count ควรจะถูก garbage collector เก็บไป แต่ในกรณีนี้ เมื่อเราบอกว่า let t = ticker(); แล้ว t จะกลายเป็น closure ซึ่งเป็น function ที่จำสภาพแวดล้อมที่สร้างมันขึ้นมา ทำให้ผลลัพธ์เป็นอย่างที่เห็น แต่ไม่เป็น FP

 ```javascript
 // Original
 function makeAdder(a) {
   return b => a + b;
 }
 const addFive = makeAdder(5);
 const addTen = makeAdder(10);
 addFive(20); // 5 + 20 => 25
 addTen(9); // 10 + 9 => 19


 // Refactoring
 const makeAdder2  = a => b => a + b;
 const addfuck = makeAdder2(5)
 addfuck(20)
 ```

 คราวนี้จะเห็นได้ว่าทั้ง makeAdder, addFive และ addTen ล้วนเป็น pure function หรือตัวอย่างที่ดูฉลาดขึ้นหน่อย

 ```javascript
 const makeSum = transFunc  => (a, b) =>
 transFunc(a) + transFunc(b);

const sumSquared = makeSum(n => n * n);
const sumCubed = makeSum(n => n * n * n);

sumSquared(1, 2); // 1^2 + 2^2 => 5
sumCubed(1, 2); // 1^3 + 2^3 => 9
 ```
 ## [รู้จักกับ Javascript Callback Function](https://medium.com/@n9ti/%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B1%E0%B8%9A-javascript-callback-function-274364969cb5)
 ### แบบธรรมดา (sync )
 ```javascript
console.log('Step 1');
funcSync();
console.log('Step 3');

function funcSync () {
  console.log('Step 2');
}
 ```
 ### แบบไม่ธรรมดา (async )
 ```javascript
 setTimeout(function(){
   console.log('Step 1')
 }, 3000);

 console.log('Step 2')

 // ผลลัพท์
 // Step 2
 // Step 1

setTimeout(doSomeThing, 3000);

function doSomeThing () {
  console.log('Hello')
}
 ```
 ฟังชั่น setTimeout จะมีการรับ parameter อยู่ 2 ตัวก็คือ
Function ที่จะให้ทำงานเมื่อถึงเวลาที่กำหนด(หรือก็คือ Callback Function นั่นเอง)
Integer ที่ใช้กำหนดเวลา มีหน่วยเป็น ms

 ```javascript
 const myAsyncFunc = callback => callback();

myAsyncFunc(callbackFunc);

function callbackFunc () {
  print('this is callback function')
}
 ```
มันจะทำ function ที่ใส่เข้าไปให้เสร็จก่อนแล้วค่อยออกมา

## ลองเล่น
### Example 1
```javascript
// Original
asyncFunc(
          function (str)
          {
              print('cb1 : ' + str);
          },
          function (str)
          {
              print('cb2 : ' + str);
          }
    );

function asyncFunc (cb1, cb2) {
  cb1('A');
  cb2('B');
}

// Refactoring

let  asyncFunc = (cb1,cb2) =>  {
    cb1('A');
    cb2('B');
}

const  f1 = str => print('cb1 : ' + str);
const  f2 = str => print('cb2 : ' + str);

asyncFunc(f1,f2);
```
### Example 2
```javascript
// Original
asyncFunc(cb, cb);

function asyncFunc (cb1, cb2) {
  cb1('A');
  cb2('B');
}

function cb (str) {
  print('cb : ' + str);
}

// Refactoring

const cb = str => print('cb : ' + str)

let  asyncFunc = (cb1,cb2) => {
    cb("A");
    cb("B");
}
asyncFunc(cb,cb);

```
### Example 3
```javascript
// Original

asyncFunc(cb, cb);

function asyncFunc (running, done) {
  for (var i = 0;i<10;i++) {
    running('i = ' + i);
  }
  done('done');
}

function cb (str) {
  print(str);
}
// Refactoring
let  cb = str => print(str);
let asyncFunc = (running, done) =>{
    for (var i = 0;i<10;i++) {
    running('i = ' + i);
  }
  done('done');
}
asyncFunc(cb, cb);
```

## [จัดการ Callback](https://blog.panjmp.com/async-await-%E0%B9%80%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81-syntax-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%88%E0%B8%B0%E0%B8%A1%E0%B8%B2%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%81%E0%B8%82%E0%B8%AD%E0%B8%87-javascript-%E0%B8%81%E0%B8%B1%E0%B8%99-3f02091eca05)

## Promise

เป็นเหมือนกับคำสัญญาว่าจะทำคำสั่งนี้ให้เรานะ โดยมันจะมีอยู่ 3 สถานะก็คือ pending, resolved, rejected เมื่อเริ่มต้นทำคำสั่ง promise จะมีสถานะเป็น pending ถ้าทำเสร็จแล้วจะมีสถานะเป็น resolved โดยจะทำคำสั่งถัดไปที่อยู่ใน .then() และถ้าทำคำสั่งไม่สำเร็จ จะมีสถานะเป็น rejected และจะไม่ทำคำสั่งถัดไป แต่จะทำคำสั่งที่อยู่ใน .catch() แทน
```javascript
var p = new Promise(function(resolve, reject) {
    let a = 5;
    if(a >= 5) {
        resolve(a);
    }else {
        reject(a);
    }
}).then(function(a) {
    console.log(`result then : ${a}`);
    return a + 2;
}).then(function(b) {
    console.log(`result then : ${b}`);
}).catch(function(a) {
    console.log(`result catch : ${a}`);
});
```
## Note
การส่ง return จะไม่ออกมาข้างนอกนะ จะเข้า parameter  then ถัดไป


## async/await
```javascript
const resolveAfter2Seconds = x => {
     return new Promise(
        resolve => {
            setTimeout(() => {
                resolve(x);
            }, 2000);
        }
    );
}
console.log(resolveAfter2Seconds(50));

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}
console.log(add1(100));

add1(10).then(v => {
    console.log(v);  // prints 60 after 4 seconds.
});

async function add2(x) {
  const p_a = resolveAfter2Seconds(20);
  const p_b = resolveAfter2Seconds(30);
  return x + await p_a + await p_b;
}

add2(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});
```
## [Function Composition](https://medium.com/jitta-engineering/%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B1%E0%B8%9A-function-composition-%E0%B8%81%E0%B8%B1%E0%B8%99-8591d8181cb)

คือกระบวนการรวมกันของ functions มากกว่า 1 ขึ้นไป และก่อให้เกิด function ใหม่ขึ้นมา
หรือรูปแบบหนึ่งที่ใช้ในการอธิบายที่ง่ายที่สุดก็คือ f(g(x)) หรือการรวมกันของ function f และ g มากระทำกับ x


```javascript
const compose = function(f, g) {
  return function(x) {
    return f(g(x))
  }
}

const compose = (f, g) => x => f(g(x))
```
apply functions ไล่ไปจาก ขวา ไป ซ้าย

### ตัวอย่าง
จินตนาการว่า เราจะสร้าง function ทำความสะอาด String ก่อนนำไปใช้งาน (sanitize function)

### ขั้นตอนการทำงาน
ตัดช่องว่างที่ไม่จำเป็นหน้าหลังของคำ (trim)
แปลงคำทั้งหมดเป็นตัวพิมพ์เล็ก (trim)
-  ตัดช่องว่างที่ไม่จำเป็นหน้าหลังของคำ (trim)
-  แปลงคำทั้งหมดเป็นตัวพิมพ์เล็ก (trim)

```javascript
function sanitize(str) {
  return str.trim().toLowerCase()
}
sanitize('  Hello My Name is Ham     ') // 'hello my name is ham'
```

ทีนี้ เราลองเขียนแบบ FP กันดู

```javascript
const trim = s => s.trim()
const toLowerCase = s => s.toLowerCase()
function sanitize(str) {
  return toLowerCase(trim(str))
}
sanitize('  Hello My Name is Ham     ') // 'hello my name is ham'
```

```javascript
const compose = (f, g) => x => f(g(x))
const sanitize = compose(toLowerCase, trim)
sanitize('  Hello My Name is Ham     ') // 'hello my name is ham'
```
```javascript
const trim = s => s.trim()
const toLowerCase = s => s.toLowerCase()
const join = separator => arr => arr.join(separator)
const split = separator => arr => arr.split(separator)
const toSlug = compose(
  toLowerCase,
  join('-'),
  split(' '),
  trim,
)
toSlug('   THIS is SluG    ') // 'this-is-slug'
```

## Pipe
ลักษณะการทำงานของ pipe คือ การส่งต่อ ผลลัพธ์ ที่ได้จากการ คำสั่งก่อนหน้า ไปให้แก่ คำสั่งด้านหลัง
- compose: apply function จาก ขวา ไป ซ้าย
- pipe: apply function จาก ซ้าย ไป ขวา


```javascript
const toSlug = pipe(
  trim,
  split(' '),
  join('-'),
  toLowerCase,
)
toSlug('   THIS is SluG    ') // 'this-is-slug'
```
