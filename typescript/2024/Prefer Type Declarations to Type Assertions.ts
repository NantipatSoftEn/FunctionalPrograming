interface Person { name: string };

const alice: Person = { name: 'Alice' };  // Type is Person
const bob = { name: 'Bob' } as Person;  // Type is Person

// แม้ว่าสิ่งเหล่านี้จะบรรลุผลสำเร็จที่คล้ายกัน แต่จริงๆ แล้วค่อนข้างแตกต่างกัน! การประกาศประเภทแรก (alice: Person) จะเพิ่มการประกาศประเภทลงในตัวแปรและรับรองว่าค่าสอดคล้องกับประเภท ส่วนการประกาศประเภทหลัง (เป็น Person) จะทำการยืนยันประเภท ซึ่งจะแจ้งให้ TypeScript ทราบว่า แม้ว่าจะอนุมานประเภทได้ แต่คุณรู้ดีกว่าและต้องการให้ประเภทนั้นเป็น Person

// โดยทั่วไปแล้ว คุณควรเลือกการประกาศประเภทมากกว่าการยืนยันประเภท นี่คือเหตุผล:


const alice2: Person = {};
   // ~~~~~ Property 'name' is missing in type '{}'
   //       but required in type 'Person'
const bob2 = {} as Person;  // No error


// คุณควรใช้การยืนยันประเภทเมื่อใด การยืนยันประเภทจะสมเหตุสมผลมากที่สุดเมื่อคุณมีความรู้เกี่ยวกับประเภทมากกว่าที่ TypeScript ทำได้ โดยปกติจะมาจากบริบทที่ตัวตรวจสอบประเภทไม่สามารถเข้าถึงได้ ตัวอย่างเช่น 
// คุณอาจทราบประเภทขององค์ประกอบ DOM ได้แม่นยำกว่าที่ TypeScript ทำได้:


document.querySelector('#myButton').addEventListener('click', e => {
    e.currentTarget // Type is EventTarget
    const button = e.currentTarget as HTMLButtonElement;
    button // Type is HTMLButtonElement
  });