import { formateCurrency } from "../JS/utilss/money.js"
describe('Test suit(group): formateCurrency', () => {
  it('converting cents to dollar', ()=> {
    expect(formateCurrency(2095)).toEqual('20.95');
  })
  it('Working with 0', () => {
    expect(formateCurrency(0)).toEqual('0.00');
})
  it('Working with rounding decimals', () => {
    expect(formateCurrency(2000.5)).toEqual('20.01')
})

})