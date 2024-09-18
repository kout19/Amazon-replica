import { cart,removeFromCart, updateDeliveryOption } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { formateCurrency } from "../utilss/money.js";
import { deliveryOptions } from "../../data/deliveryOption.js";
let checkoutHtml = '';
let itemQuantity = 0;
function updateItemQuantity() {
  cart.forEach((orderedElement) => {
    let productId = orderedElement.productId;
    let matchingId;
    itemQuantity += orderedElement.quantity;
  });  
}
updateItemQuantity();

export function renderOrderSummary() {
    let checkoutHtml = '';

  cart.forEach((orderedElement) => {
    let productId = orderedElement.productId;
    let matchingId;
    // itemQuantity += orderedElement.quantity;
    products.forEach((product) => {
      if (productId === product.id) {
        matchingId = product;
      }
    })
    // console.log(matchingId)
    let cartItemHolder;
    cart.forEach((cartItem) => {
      cartItemHolder = cartItem;
    })
    const deliveryOptionId = cartItemHolder.deliveryOptionId;
    let deliveryOption;
    deliveryOptions.forEach((option) => {
      if (option.id === deliveryOptionId) {
        deliveryOption = option;

      }
      
    })
    // console.log(deliveryOption.priceCents);
        const today = dayjs();
        const deliverDate = today.add(deliveryOption.deliveryDays, 'days');
        const dateString = deliverDate.format('dddd, MMMM D');
    checkoutHtml+= `
    
            <div class="cart-item-container js-cart-item-container-${matchingId.id}">
              <div class="delivery-date">
                Delivery date: ${dateString} 
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
                ${deliveryOptionsHTML(matchingId)}
                  </div>
                </div>
              </div>
            </div>


    `
  });
  function deliveryOptionsHTML(matchingId) {
    let html = '';
    deliveryOptions.forEach((deliverOption) => {
      const today = dayjs();
      const deliverDate = today.add(deliverOption.deliveryDays, 'days');
      const dateString = deliverDate.format('dddd, MMMM D');
      const priceString = deliverOption.priceCents == 0 ? 'Free- ' : `$${formateCurrency(deliverOption.priceCents)}`
        html+=
      `
      <div class="delivery-option js-delivery-option " data-product-id="${matchingId.id}" data-delivery-option-id="${deliverOption.id}">
                    <input type="radio"
                      class="delivery-option-input"
                      name="delivery-option-${matchingId.id}">
                    <div>
                      <div class="delivery-option-date">
                        ${dateString}
                      </div>
                      <div class="delivery-option-price">
                      ${priceString} shipping
                      </div>
                    </div>
                  </div>
      `
      
    })
    return html;
  }
  let checkoutGrid = document.querySelector('.js-order-summary').innerHTML=checkoutHtml;
  let deleteLink = document.querySelectorAll('.js-delete-link');
  // console.log(deleteLink)
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

  const today = dayjs();
  const deliveryDate = today.add(7, 'days');
  // console.log(deliveryDate)
  // console.log(deliveryDate.format('dddd, MMMM , D'));

    const checkoutItemQuantity = document.querySelector('.js-return-to-home-link');
  checkoutItemQuantity.innerHTML = itemQuantity+' items';
  document.querySelectorAll('.js-delivery-option').forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      console.log(productId)
      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
    })
  })
}
