import { products } from "../data/products.js";
let quantityNumber = 0;
export let cart = [{
  productId: '15b6fc6f-3ddt34233-kk4452sf-1',
  quantity:quantityNumber
}, {
  productId: '15b6fc6f-3ddt34233-kk4452sf-2',
  quantity:quantityNumber
  }];
export function addToCartFunction(productId) {
  const quantitySelector = document.querySelector(`.js-select-quantity-${productId}`);
   const addedToCart = document.querySelector(`.added-to-cart-${productId}`);
  let quantitySelectorValue = Number(quantitySelector.value);
  quantityNumber = quantitySelectorValue;
  let matchingItem ;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    })
     if (matchingItem) {
        matchingItem.quantity=quantitySelectorValue;
      }
      else {
        cart.push({
      productId: productId,
      quantity: quantitySelectorValue
        })
  }
    //add class name
    addedToCart.classList.add("item-added");
    //Clear message after two seconds
    setInterval(() => {
      addedToCart.classList.remove("item-added");
    }, 2000);
}

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  })
  cart = newCart;
}