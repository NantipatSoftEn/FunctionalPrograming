const myCart = [
 {name:'Oreo',unitPrice:5,quantity:10},
 {name:'Pocky',unitPrice:18,quantity:2},
 {name:'Magnum',unitPrice:45,quantity:3}
]


const subtotalOfItem = item => item.unitPrice*item.quantity
const quantityOfItem = item => item.quantity

const subOfCartByFunction = (cart,f) => {
    let sum = 0;
    for(let item of cart){
           sum+= f(item)
    }
    return sum
}



const numberOfItemsInCart = cart => subOfCartByFunction(cart,quantityOfItem)
const subtotalOfCart = cart => subOfCartByFunction(cart,subtotalOfItem)

print(numberOfItemsInCart(myCart))
print(subtotalOfCart (myCart))
