# InterFaces

หลักการสำคัญอย่างหนึ่งของ TypeScript คือการตรวจสอบ type Interface จะเติมเต็มบทบาทในการตั้งชื่ออย่างมีประสิทธิภาพ

```tsx
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// changed
//====================
interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

## Excess Property Checks

```tsx
nterface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

let mySquare = createSquare({ colour: "red", width: 100 })
```

`colour` ผิดไม่ตรงกับ Interfaces ก็ไม่ให้นะ

วิธี check

```tsx
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
```

ยังไงก็ตามมีแนวทางที่ดีกว่าในการเพิ่ม extra properties ในทีนี้เป็นการบอกว่าจะมี properties เท่าไหร่ก็ได้ตราบที่พวกมันไม่ใช้สีหรือความกว้าง

```tsx
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
```

วิธีสุดท้ายในการหลีกเลี่ยงการตรวจสอบเหล่านี้ซึ่งอาจเป็นเรื่องที่น่าแปลกใจเล็กน้อยคือการกำหนดออบเจ็กต์ให้กับตัวแปรอื่นเนื่องจาก squareOptions จะไม่ผ่านการตรวจสอบคุณสมบัติส่วนเกินคอมไพลเลอร์จะไม่ให้ข้อผิดพลาดแก่คุณ

```tsx
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);
```

## Function Types

```tsx
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

มันจะตรวจสอบ parameters and และ type return ถ้าไม่ตรงมันจะ error

## Indexable Types

เหมือนการใช้ map ที่มีการกำหนด index type ได้ ลองดูตัวอย่างที่ type ช่วยเราไว้ไม่ให้พลาด

```tsx
interface NumberDictionary {
  [index: string]: number;
  length: number; // ok, length is a number
  name: string; // error, the type of 'name' is not a subtype of the indexer
  //Property 'name' of type 'string' is not assignable to string index type 'number'.
}
```

`name: string` ค่าของ index ผิดเพราะเรา assign ไว้เป็น `[index: string]: number;`

ถ้าจะทำให้ถูกต้องละก็ต้องทำแบบนี้

```tsx
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}
```

## Class Type

หนึ่งในการใช้ interface ที่พบบ่อยสุด เป็น pattern OOP ที่ปกติทั่วไปอยู่แล้ว

```tsx
interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}
}
```

## Difference between the static and instance sides of classes

เมื่อทำงานกับ class และ interface โปรดทราบว่า class มีสองประเภทคือประเภทของ static side และ type of instant คุณอาจสังเกตเห็นว่าถ้าคุณสร้างอินเทอร์เฟซด้วย construct signature และพยายามสร้างคลาสที่ใช้อินเทอร์เฟซนี้คุณจะได้รับข้อผิดพลาด

```tsx
interface ClockConstructor {
  new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
  // Class 'Clock' incorrectly implements interface 'ClockConstructor'.
  //   Type 'Clock' provides no match for the signature 'new (hour: number, minute: number): any'.
  currentTime: Date;
  constructor(h: number, m: number) {}
}
```

เนื่องจากเมื่อ class ใช้ interface, only the instance side of the class is checked

แทนที่คุณจะต้องทำงานกับ static side ของ class โดยตรง ในตัวอย่าง define 2 interfaces
Since the constructor sits in the static side, it is not included in this check.

`ClockConstructor` for contructor
`ClockInterface` for instant method

จากนั้นเพื่อความสะดวกเรากำหนด function `createClock` ที่สร้าง instant ของประเภทท่ส่งไป

```tsx
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
```

เนื่องจากพารามิเตอร์แรกของ `createClock` เป็นประเภท `ClockConstructor` ใน `createClock`
`(AnalogClock, 7, 32)` จึงตรวจสอบว่า `AnalogClock` มี constructor signature ถูกต้อง

Another simple way is to use class expressions:

```tsx
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
};

let clock = new Clock(12, 17);
clock.tick();
```

อีกวิธีง่ายๆ

```tsx
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
};

let clock = new Clock(12, 17);
clock.tick();
```

## Extending Interfaces

ดูจาก code ได้เลยอันนี้เข้าใจง่าย

```tsx
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

## Hybrid Types

ดังที่เราได้กล่าวไว้ก่อนหน้านี้อินเทอร์เฟซสามารถอธิบายประเภทที่หลากหลายที่มีอยู่ใน JavaScript ในโลกแห่งความจริง JavaScript’s dynamic and flexible nature คุณอาจจะเจอ Object แบบ Hybrid

ตัวอย่างหนึ่งคืออ็อบเจ็กต์ที่ทำหน้าที่เป็นทั้งฟังก์ชันและอ็อบเจ็กต์โดยมีคุณสมบัติเพิ่มเติม:

## Interfaces Extending Classes

เมื่อ interface type extends a class type it inherits the members of the class แต่ไม่ใช้การนำไปใช้งาน เหมือนว่า interface มีการประกาศสมาชิกทั้งหมดของ class โดยไม่ต้องมีการใช้งาน Interfaces สืบทอดแม้กระทั้ง private and protected members of a base

หมายความว่าคุณสามารถสร้าง interface that extends a class with private or protected members

สิ่งนี้มีประโยชน์เมื่อคุณมีลำดับชั้นการสืบทอดขนาดใหญ่ แต่ต้องการระบุว่าโค้ดของคุณใช้งานได้กับคลาสย่อยที่มีคุณสมบัติบางอย่างเท่านั้น คลาสย่อยไม่จำเป็นต้องเกี่ยวข้องกันนอกเหนือจากการสืบทอดจากคลาสพื้นฐาน ตัวอย่างเช่น:

```tsx
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

class ImageControl implements SelectableControl {
  // Class 'ImageControl' incorrectly implements interface 'SelectableControl'.
  //   Types have separate declarations of a private property 'state'.
  private state: any;
  select() {}
}
```
