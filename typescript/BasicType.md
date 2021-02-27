# Handbook

- อ่านและเข้าใจ syntax patern
- อธิบายผลของตัวเลือกคอมไพเลอร์ที่สำคัญ
- เดา type ออกและพฤติกรรมออก
- เขียน การประกาศตัวแปร(declaration ) function,object,class ได้

## Basic Type

สิ่งที่รู้เพิ่มมาคือ

### Unknow

We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content

### Any

ในบางสถานการณ์อาจไม่มีข้อมูลบางประเภทหรือการประกาศอาจใช้ความพยายามอย่างไม่เหมาะสม สิ่งเหล่านี้อาจเกิดขึ้นสำหรับค่าจากโค้ดที่เขียนโดยไม่มี TypeScript หรือไลบรารีของบุคคลที่สาม

#### Unknow vs Any

เทียบนิยามกันดูแล้วก็ งง ลองดูตัวอย่างจะดีกว่า

> [unknown-vs-any](https://stackoverflow.com/questions/51439843/unknown-vs-any)

```ts
let vAny: any = 10; // We can assign anything to any
let vUnknown: unknown = 10; // We can assign anything to unknown just like any

let s1: string = vAny; // Any is assignable to anything
let s2: string = vUnknown; // Invalid we can't assign vUnknown to any other type (without an explicit assertion)

vAny.method(); // ok anything goes with any
vUnknown.method(); // not ok, we don't know anything about this variable
```

## Tuple

array element ทีมี่ type

## Enum

เหมือนใน C# จัดกลุ่มค่าคงที่ของจำนวนเต็มให้เข้าใจง่าย

## Void

not return any thing

```tsx
function warnUser(): void {
  console.log("This is my warning message");
}
```

## Never

type ที่แสดงถึงประเภทของค่าที่ไม่เคยเกิดขึ้น

```tsx
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while
```

## Object

เป็นประเภทที่แสดงถึงประเภทที่ไม่ใช่แบบดั้งเดิม (non-primitive type)

## Type assertions

บางครั้งคุณอาจต้องตกอยู่ในสถานการณ์ที่คุณจะได้รู้เกี่ยวกับมูลค่ามากกว่าที่ TypeScript ทำเสียอีก โดยปกติแล้วสิ่งนี้จะเกิดขึ้นเมื่อคุณทราบว่าประเภทของเอนทิตีบางอย่างอาจมีความเฉพาะเจาะจงมากกว่าประเภทปัจจุบัน

```tsx
let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;
let strLength: number = (<string>someValue).length;
```
