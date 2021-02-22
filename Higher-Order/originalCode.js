const myCart = [
  { name: "Oreo", unitPrice: 5, quantity: 10 },
  { name: "Pocky", unitPrice: 18, quantity: 2 },
  { name: "Magnum", unitPrice: 45, quantity: 3 },
];

let subtotalOfCart = (cart) => {
  let sum = 0;
  for (let item of cart) {
    sum += item.unitPrice * item.quantity;
  }
  return sum;
};

console.log(subtotalOfCart(myCart));

const numberOfItemsInCart = (cart) => {
  let sum = 0;
  for (let item of cart) {
    sum += item.quantity;
  }
  return sum;
};

console.log(numberOfItemsInCart(myCart));
