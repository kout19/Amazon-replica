import { products } from "../data/products.js";
// import { itemQuantity } from "../JS/checkout.js";
let quantityNumber = 0;
export let cart;
loadFromStorage();
export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));
if (!cart)
{
 cart= [{
  productId: '15b6fc6f-3ddt34233-kk4452sf-1',
   quantity: quantityNumber,
  deliveryOptionId:'1'
}, {
  productId: '15b6fc6f-3ddt34233-kk4452sf-2',
   quantity: quantityNumber,
    deliveryOptionId:'2'
  }];
  }
}
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

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
        quantity: quantitySelectorValue,
      deliveryOptionId:'1'
        })
  }
    //add class name
    addedToCart.classList.add("item-added");
    //Clear message after two seconds
    setInterval(() => {
      addedToCart.classList.remove("item-added");
    }, 2000);
  saveToStorage();
}

// export function quantitySaveToLocalstorage() {
//   localStorage.setItem('quantity', quantityNumber);
// }

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  })
  cart = newCart;
  saveToStorage();
}
 export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem ;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    })
  matchingItem.deliveryOptionId = deliveryOptionId;
  saveToStorage();
}