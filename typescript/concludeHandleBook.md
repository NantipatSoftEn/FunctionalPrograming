# Handbook

- อ่านและเข้าใจ syntax patern
- อธิบายผลของตัวเลือกคอมไพเลอร์ที่สำคัญ
- เดา type ออกและพฤติกรรมออก
- เขียน การประกาศตัวแปร(declaration ) function,object,class ได้

## Basic Type

สิ่งที่รู้เพิ่มมาคือ

### Unknow

### Any

บางสถานการณ์เราไม่รู้ว่า 3rd party ส่งอะไรมาให้ก็ใช้อันนี้แหละ มันไม่เหมือน `unknow` เพราะ

#### Unknow vs Any

```ts
let vAny: any = 10; // We can assign anything to any
let vUnknown: unknown = 10; // We can assign anything to unknown just like any

let s1: string = vAny; // Any is assignable to anything
let s2: string = vUnknown; // Invalid we can't assign vUnknown to any other type (without an explicit assertion)

vAny.method(); // ok anything goes with any
vUnknown.method(); // not ok, we don't know anything about this variable
```
