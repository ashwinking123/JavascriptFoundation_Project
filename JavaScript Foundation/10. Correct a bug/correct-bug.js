function a(cart){
    for(let i=0; i < cart.length; i++){
        cart[i] *= 2
    }
    return cart;
}

const cart = [2,3,4,5,6,]
const u = a(cart)
console.log(u)
