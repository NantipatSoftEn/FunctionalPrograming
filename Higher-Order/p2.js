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

const sumOfCartBy = f => cart =>  subOfCartByFunction(cart,f)

const subtotalOfCart = sumOfCartBy(subtotalOfItem)
const numberOfItemsInCart =  sumOfCartBy(quantityOfItem)


print(subtotalOfCart(myCart))
