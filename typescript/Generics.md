# Generics

ส่วนสำคัญขของ software engineering คือการ building component ไม่เพียงแต่มี API ที่กำหนดไว้อย่างดีและสอดคล้องเท่านั้น แต่ยังสามารถใช้ซ้ำได้ด้วย
ส่วนประกอบที่สามารถทำงานกับข้อมูลของวันนี้และพรุ้งนี้ทำให้มีความสามารถที่ยืดหยุ่นที่สุดในการสร้าง software ขนาดใหญ่

Generics ก็คือตัวแปรของ type นั้นเอง

```tsx
function identity(arg: number): number {
  return arg;
}

// ไม่รู้ type
function identity(arg: any): any {
  return arg;
}

// ไม่รู้ type แล้วตอนใช้ function บอกด้วยนะว่า cast type อะไรมา
function identity<T>(arg: T): T {
  return arg;
}
```

## Working with Generic Type Variables

ลองดูตัวอย่างนี้ มันจะ error เพราะไม่รู้จัก type เรารู้แหละว่ามันคือ array

```tsx
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length);
  // Property 'length' does not exist on type 'T'.
  return arg;
}
```

สมมติว่าเราตั้งใจให้ฟังก์ชันนี้ทำงานกับอาร์เรย์ของ `T` แทนที่จะเป็น `T` โดยตรง เนื่องจากเรากำลังทำงานกับอาร์เรย์จึงควรมีสมาชิก `.length`เราสามารถอธิบายสิ่งนี้ได้เหมือนกับที่เราสร้างอาร์เรย์ประเภทอื่น ๆ :

```tsx
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
```

## Generic Types

ในส่วนก่อนหน้านี้เราได้สร้างฟังก์ชันการระบุตัวตนทั่วไปที่ทำงานในหลายประเภท ในส่วนนี้เราจะสำรวจประเภทของฟังก์ชันและวิธีสร้างอินเทอร์เฟซทั่วไป

ประเภทของฟังก์ชันทั่วไปก็เหมือนกับฟังก์ชันที่ไม่ใช่ฟังก์ชันทั่วไป (The type of generic functions is just like those of non-generic functions)

```tsx
function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: <T>(arg: T) => T = identity;

let myIdentity2: { <T>(arg: T): T } = identity;

console.log(myIdentity<String>("army"));
```

ซึ่งนำเราไปสู่การเขียนอินเทอร์เฟซทั่วไปแรกของเรา เราจะนำออบเจ็กต์ลิเทอรัลจากตัวอย่างก่อนหน้านี้และย้ายไปยังอินเทอร์เฟซ:

```tsx
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

console.log(myIdentity(1));
```

## Generic Classes

A generic class has a similar shape to a generic interface

## Generic Constraints

หากคุณจำได้จากตัวอย่างก่อนหน้านี้บางครั้งคุณอาจต้องการเขียนฟังก์ชันทั่วไปที่ทำงานกับชุดประเภทที่คุณมีความรู้บางอย่างเกี่ยวกับความสามารถในชุดประเภทนั้น ๆ ในตัวอย่าง `loggingIdentity` ของเราเราต้องการเข้าถึงคุณสมบัติ `.length` ของ `arg` แต่คอมไพเลอร์ไม่สามารถพิสูจน์ได้ว่าทุกประเภทมีคุณสมบัติ `.length` ดังนั้นจึงเตือนเราว่าเราไม่สามารถตั้งสมมติฐานนี้ได้

็เราสามารถสร้าง interface ที่จำกัดได้โดยใช้ keyword `extends`

```tsx
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
```

## Using Class Types in Generics

เมื่อสร้าง factories ใน TypeScript โดยใช้ generics จำเป็นต้องอ้าง type class ตาม contructor

```tsx
class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;eturn new c();
}
```
