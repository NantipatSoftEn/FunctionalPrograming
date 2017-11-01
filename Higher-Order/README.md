```javascript
const myCart = [
 {name:'Oreo',unitPrice:5,quantity:10},
 {name:'Pocky',unitPrice:18,quantity:2},
 {name:'Magnum',unitPrice:45,quantity:3}
]

let subtotalOfCart = cart => {
    let sum = 0;
    for(let item of cart){
           sum+= item.unitPrice*item.quantity
    }
    return sum
}

print(subtotalOfCart(myCart))
```


a function  that takes a cart -> returns a number

เขียนสั้นๆว่า  cart -> number

  ถ้าอยากให้มันนับได้หล่ะ

```javascript
const numberOfItemsInCart = cart => {
    let sum = 0;
    for(let item of cart){
           sum+= item.quantity
    }
    return sum  
}

print(numberOfItemsInCart(myCart))
```
สังเกตว่ามัน Duplicated

ลองรวมกันสิ้
```javascript
const calculateCartStatistics = (cart,statType) => {
    let sum = 0
    for (let item of cart){
        switch(statType){
            case "STAT_TYPE_SUBTOTAL":
                sum += item.unitPrice*item.quantity
                break
            case "STAT_TYPE_NUMBER_OF_ITEMS":
                sum += item.quantity
                break
        }
    }
    return sum
}
print(calculateCartStatistics(myCart,"STAT_TYPE_SUBTOTAL"))
```
แต่แบบนี้มัน Complicated วุ่นวายมาก ทำหน้าที่หลายอย่าง

### ปัญหาคือเราจะเลือกให้มัน Duplicated หรือ Complicated ดี !

Sandi Metz (สุดยอด OOAD) บอกว่า
โค้ด Duplicated จะแก้ง่ายกว่าที่มันออกแบบมาผิดๆ

### Solution: Compose  

เอาของที่ต่างกันออกมา ของที่เหลืออยู่ก็จะเหมือนกัน
###  สิ่งที่แตกต่างของฟังก์ชั่น
```javascript
item.unitPrice * item.quantity
item.quantity
```
ส่วนที่ต่างกันมีส่วนที่เหมือนกันคือ Obj item
เราจะแยกเป็น function ใหม่ f(item),
item -> number
### ได้เป็น
```javascript
const subtotalOfItem = item => item.unitPrice*item.quantity
const quantityOfItem = item => item.quantity
```
ไอสองตัวนี้มันเป็น item -> number

```javascript
const quantityOfItem = item => item.quantity

const subtotalOfCart = cart => {
    let sum = 0;
    for(let item of cart){
           // This line Change
           sum+= subtotalOfItem(item)
    }
    return sum
}

print(subtotalOfCart(myCart))


const numberOfItemsInCart = cart => {
    let sum = 0;
    for(let item of cart){
           // This line Change
           sum+= quantityOfItem(item)
    }
    return sum  
}

print(numberOfItemsInCart(myCart))
```

### ทำ Parameterrize

```javascript
const subOfCartByFunction = (cart,f) => {
    let sum = 0;
    for(let item of cart){
           sum+= f(item)
    }
    return sum
}
```
เป็น  Higher-order   ละ (รับ parameter เป็น function)
(cart,(item->number)) -> number


```javascript
const numberOfItemsInCart = cart => subOfCartByFunction(cart,quantityOfItem)
const subtotalOfCart = cart => subOfCartByFunction(cart,subtotalOfItem)
```
(item -> number) -> cart -> number
แต่มันก็ยัง  Duplicated ต่างกันแค่ ชื่อ   รวมมันซะ

```javascript
const subtotalOfItem = item => item.unitPrice*item.quantity
const quantityOfItem = item => item.quantity

const subOfCartByFunction = (cart,f) => {
    let sum = 0;
    for(let item of cart){
           sum+= f(item)
    }
    return sum
}

const sumOfCartBy = f => cart =>  
subOfCartByFunction(cart,f)

const subtotalOfCart = sumOfCartBy(subtotalOfItem)
const numberOfItemsInCart = sumOfCartBy(quantityOfItem)


print(subtotalOfCart(myCart))
print(numberOfItemsInCart(myCart))
```
แต่เวลาอ่านมันกระโดดไปมาเราจึง inline มันซะเลย
```javascript
const subtotalOfItem = item => item.unitPrice*item.quantity
const quantityOfItem = item => item.quantity


const sumOfCartBy = f => cart => {
    let sum  = 0
    for(let item of cart){
        sum+= f(item)
    }
    return sum
}

const subtotalOfCart = sumOfCartBy(subtotalOfItem)
const numberOfItemsInCart =  sumOfCartBy(quantityOfItem)


print(subtotalOfCart(myCart))
print(numberOfItemsInCart(myCart))
```
ใช้ map กับ reduce ลด Loop
```javascript
const sumOfCartBy = f => cart =>
      cart.map(f).reduce((x,y) => x+y,0)
```
### Note
 map() และ reduce รับ parameter เป็น เป็น function

 ```javascript
 // ใช้ Object.freeze เพื่อป้องกันการแก้ไขข้อมูล
// การันตีว่าโค๊ดข้างล่างจะไม่แอบแก้ไขค่า arr
const arr = Object.freeze([1, 2, 3, 4])

// ได้อาร์เรย์ชุดใหม่ที่เกิดจากการเอาแต่ละค่าคูณสอง
arr.map(item => item * 2) // [2, 4, 6, 8]

// ได้ผลลัพธ์เป็นค่าใหม่คือผลรวมของทุกค่าในอาร์เรย์
arr.reduce((sum, item) => sum + item, 0) // 10

// เลือกค่าในอาร์เรย์ที่เป็นเลขคู่ออกมาเป็นอาร์เรย์ตัวใหม่
arr.filter(item => item % 2 === 0) // [2, 4]

// เนื่องจากการคืนค่าใหม่นี้เองจึงทำให้สามารถเรียกฟังก์ชันต่อไปได้ต่อเนื่อง
arr.map(item => item * 2)
   .filter(item => item % 2 === 0) // [2, 4, 6, 8]
 ```
