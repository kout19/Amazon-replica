
let productsHtml = '';
products.forEach(product => {
 productsHtml+= `
    <div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${product.image}"
              alt=""
            />
          </div>
          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>
          <div class="ratings">
            <img
              class="rating-icons"
              src="images/ratings/rating-${product.rating.stars*10}.png"
              alt=""
            />
            <div class="product-rating-count link-primary">${product.rating.count}</div>
          </div>
          <div class="product-price">$${(product.PriceCents/100).toFixed(2)}</div>
          <div class="select-number">
            <select name="select-number" id="" class="js-select-quantity-${product.id}">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div class="product-spacer"></div>
          <div class="add-to-cart-button">
            <button class="add-cart button-primary js-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
          </div>
        </div>
  `
})
document.querySelector('.js-products-grid').innerHTML = productsHtml;
const addToCart = document.querySelectorAll((".js-add-to-cart"));
addToCart.forEach(button => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    const quantitySelector = document.querySelector(`.js-select-quantity-${productId}`);
    let quantitySelectorValue = Number(quantitySelector.value);
    console.log(quantitySelector)
    let matchingItem ;
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
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
    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity
    })
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  console.log(cart)
    // console.log(matchingItem);
console.log(productId)
 
  })
})
