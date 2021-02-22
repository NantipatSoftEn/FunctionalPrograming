const myCart = [
  { name: "Oreo", unitPrice: 5, quantity: 10 },
  { name: "Pocky", unitPrice: 18, quantity: 2 },
  { name: "Magnum", unitPrice: 45, quantity: 3 },
];

const subtotalOfItem = (item) => item.unitPrice * item.quantity;
const quantityOfItem = (item) => item.quantity;

const sumOfCartBy = (f) => (cart) => cart.map(f).reduce((x, y) => x + y);

const subtotalOfCart = sumOfCartBy(subtotalOfItem);
const numberOfItemsInCart = sumOfCartBy(quantityOfItem);

console.log(subtotalOfCart(myCart));
console.log(numberOfItemsInCart(myCart));
