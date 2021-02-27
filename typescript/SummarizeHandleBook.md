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
