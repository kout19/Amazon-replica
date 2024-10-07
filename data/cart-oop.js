import { loadFromStorage } from "./cart.js";
import { products } from "./products.js";
let quantityNumber = 0;
function Cart(localStorageKey) {  // C is capital b/c we are generating objects
    const cart = {
    cartItems: undefined,
    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
      if (!this.cartItems) {
        this.cartItems = [{
          productId: '15b6fc6f-3ddt34233-kk4452sf-1',
          quantity: quantityNumber,
          deliveryOptionId: '1'
        }, {
          productId: '15b6fc6f-3ddt34233-kk4452sf-2',
          quantity: quantityNumber,
          deliveryOptionId: '2'
        }];
      }
    },
  saveToStorage() {
    localStorage.setItem('localStorageKey', JSON.stringify(this.cartItems));
    },
    addToCartFunction(productId) {
    const quantitySelector = document.querySelector(`.js-select-quantity-${productId}`);
    const addedToCart = document.querySelector(`.added-to-cart-${productId}`);
    let quantitySelectorValue = Number(quantitySelector.value);
    quantityNumber = quantitySelectorValue;
    let matchingItem ;
      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      })
      if (matchingItem) {
          matchingItem.quantity=quantitySelectorValue;
        }
        else {
          this.cartItems.push({
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
    this.saveToStorage();
    },
    removeFromCart(productId) {
    const newCart = [];
    this.cartItems.forEach((cartItem) => {
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    })
    this.cartItems = newCart;
    this.saveToStorage();
    },
    updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem ;
      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      })
    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  }
  };
  return cart;
}
let cart = Cart('cart-oop');
let bussinesCart = Cart('cart-bussines');

bussinesCart.loadFromStorage();
cart.loadFromStorage();
console.log(cart)
console.log(bussinesCart)