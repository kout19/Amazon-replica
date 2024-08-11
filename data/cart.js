export const cart = [];
export function addToCartFunction(productId) {
  const quantitySelector = document.querySelector(`.js-select-quantity-${productId}`);
   const addedToCart = document.querySelector(`.added-to-cart-${productId}`);
   let quantitySelectorValue = Number(quantitySelector.value);
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