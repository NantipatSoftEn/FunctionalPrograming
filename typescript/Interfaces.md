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

เหมือนการใช้ map ที่มีการกำหนด index type ได้

## Class Type
