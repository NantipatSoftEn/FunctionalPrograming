# Functions

เรื่องอื่นๆเป็นที่เข้าใจง่ายอยู่แล้วจะกระโดดข้ามมาเรื่อง `This` เลยแล้วกัน

## This

เนื่องจาก TyprScript เป็นส่วนนึงของ JavaScript เลยต้องรู้เกี่ยวกับ `this` Typesript ช่วยให้คุณใช้ `this` อย่างถูกต้อง
ถ้าอยากรู้การทำงานของ `this` ลองอ่านบทความนี้ดู

- [this-ใน-javascript-มันคืออะไรกันแน่](https://www.borntodev.com/2020/05/02/this-%E0%B9%83%E0%B8%99-javascript-%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%99%E0%B9%88)
- [Data binding ของ JavaScript และการใช้งาน “this” keyword](https://medium.com/algorithmtut/data-binding-%E0%B8%82%E0%B8%AD%E0%B8%87-javascript-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99-this-keyword-1c5a1f95b0f3)

## this and arrow functions

`this` คือตัวแปรตอนเรียก fucntion This makes it a very powerful and flexible feature แต่เราต้องรู้เกี่ยวกับบริบท (context) ที่ function กำลังทำงานอยู่เสมอ สิ่งนี้ทำให้เกิดความสับสนโดยเฉพาะอย่างยิ่งเมื่อส่งคืนฟังก์ชันหรือส่งผ่านฟังก์ชันเป็นอาร์กิวเมนต์

```tsx
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // createCardPicker เป็น global ทำให้ไม่รู้จัก suits, cards ใน deck
  createCardPicker: function () {
    return function () {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
```

ข้อสังเกตคือ `createCardPicker` คือ function return function และ example นี้มัน error เนื่องจาก `this` ถูกใช้ใน function โดย `createCardPicker` จะถูกตั้งค่าเป็น `windows` แทน `deck` object

นั้นเพราะเราเรียก `cardPicker()` ด้วยตัวมันเอง A top-level non-method syntax call like this will use window for this

เราสามารถแก้ไขได้โดยตรวจสอบให้แน่ใจว่าฟังก์ชันถูกผูกไว้กับสิ่งที่ถูกต้อง `this` ก่อนที่เราจะส่งคืนฟังก์ชันเพื่อใช้ในภายหลัง ด้วยวิธีนี้ไม่ว่าจะนำไปใช้อย่างไรในภายหลัง it will still be able to see the original `deck` object.

การใช้ this กับ arrow function ของ JavaScript นั้นจะไม่เหมือนกับการประกาศ function แบบปกติเพราะมันจะไม่ผูกกับ object ตัวนั้นแต่จะยังผูกกับ global

```tsx
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // createCardPicker ผูกกับ   global แล้ว
  createCardPicker: function () {
    return function () {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};
```
