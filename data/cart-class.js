let quantityNumber = 0; 
class Cart{
  cartItems = undefined;
  #localStorageKey = undefined;
  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }
  #loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
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
  }
  
  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }
  

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
  }
  
   removeFromCart(productId) {
    const newCart = [];
    this.cartItems.forEach((cartItem) => {
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    })
    this.cartItems = newCart;
    this.saveToStorage();
  }
  
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
}

let cart = new Cart('cart-oop');
let bussinesCart = new Cart('cart-bussines');
 
console.log(cart)
console.log(bussinesCart)