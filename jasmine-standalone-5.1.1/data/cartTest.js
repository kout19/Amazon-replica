import {cart, addToCartFunction, loadFromStorage} from '../../data/cart.js'
describe('test suite:Add to cart', () => {
  // it('Add existing product to cart', () => {
    
  // })
  it('add new product to cart', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    loadFromStorage();
    addToCartFunction('15b6fc6f-3ddt34233-kk4452sf-1')
    expect(cart.length).toEqual(1);
  })

})