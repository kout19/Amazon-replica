import { formateCurrency } from "../JS/utilss/money.js"

console.log("Formate Currency Group")
console.log("Converting cents to dollar")
if (formateCurrency(2095) === '20.95') {
  console.log("passed")
}
else {
  console.log("failed")
}
console.log('Wroking with 0')

if (formateCurrency(0) === '0.00') {
  console.log("passed")
}
else {
  console.log('failed')
}
console.log('Rounding up cents')

if (formateCurrency(2000.5) === '20.01') {
  console.log("passed")
  
}
else {
  console.log("Failed")
}
