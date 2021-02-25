const _pipe = (a, b) => (...arg) => b(a(...arg));
const pipe = (...ops) => ops.reduce(_pipe);

/* ส่วนลด 10% */

const discount10percent = (price) => price - (price * 10) / 100;

/* ค่าส่ง 40 บาท */
const deliveryFee = (price) => price + 40;

/* เพิ่ม Vat 7% */
const addVAT = (price) => price - (price * 7) / 100;

const calculate = pipe(discount10percent, addVAT, deliveryFee);
const orderPrice = 100;

console.log("total:", calculate(orderPrice));
