import { cart,removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formateCurrency } from "./utilss/money.js";
let checkoutHtml = '';
 let itemQuantity = 0;
cart.forEach((orderedElement) => {
  let productId = orderedElement.productId;
  let matchingId;
  itemQuantity += orderedElement.quantity;
  products.forEach((product) => {
    if (productId === product.id) {
      matchingId = product;
    }
  })
  // console.log(matchingId)
  checkoutHtml+= `
  
          <div class="cart-item-container js-cart-item-container-${matchingId.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingId.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingId.name}
                </div>
                <div class="product-price">
                 $${formateCurrency(matchingId.PriceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${orderedElement.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingId.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingId.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingId.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingId.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


  `
});



let checkoutGrid = document.querySelector('.js-order-summary').innerHTML=checkoutHtml;
let deleteLink = document.querySelectorAll('.js-delete-link');
console.log(deleteLink)
deleteLink.forEach((link)=> {
  link.addEventListener(("click"),()=> {
    let productId = link.dataset.productId;
    let container=document.querySelector(`.js-cart-item-container-${productId}`);
    removeFromCart(productId);   
    container.remove();
   updateCheckoutItems();
})
})

function updateCheckoutItems() {
  cart.forEach(cartItem => {
    let quantity = cartItem.quantity;
    console.log(cartItem.quantity)
      deleteLink.forEach(link => {
        link.addEventListener('click',()=> {
          itemQuantity -= quantity;
        })
   })
    
  })

}
  const checkoutItemQuantity = document.querySelector('.js-return-to-home-link');
checkoutItemQuantity.innerHTML = itemQuantity+' items';
