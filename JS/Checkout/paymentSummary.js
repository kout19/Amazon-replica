import { cart } from "../../data/cart.js";
import { getProduct,products } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOption.js";
import { formateCurrency } from "../utilss/money.js";
export function renderPaymentSummary() {
  let productPriceCent = 0;
  let deliveryOptonCents = 0;
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCent += cartItem.quantity * product.PriceCents;
    let deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    deliveryOptonCents += deliveryOption.priceCents;
  });
  const totalBeforeTaxCents = productPriceCent + deliveryOptonCents;
  const estimatedTax = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + estimatedTax;


  const paymentSummaryHTML = `
    <span class="payment-summary-title">Order Summary</span>
          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">
             $${formateCurrency(productPriceCent)}
            </div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formateCurrency(deliveryOptonCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formateCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formateCurrency(estimatedTax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formateCurrency(totalCents)}
            </div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
  `
  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}
