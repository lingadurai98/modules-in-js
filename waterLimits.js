// Water limits .js

const { fahrenheitToCelsius, celsiusToFahrenheit } = require('./converter')

const freezingPoint = celsiusToFahrenheit(0)
const boilingPointC = celsiusToFahrenheit(100)
const freezingPointF = fahrenheitToCelsius(0)
const boilingPointF = fahrenheitToCelsius(100)


console.log('thefreexingpoint of water in fahrenheit is ' + freezingPoint)
console.log('the boiling point of water in fahrenheit is ' + boilingPointC)
console.log('the boiling point of water in fahrenheit is ' + freezingPointF)
console.log('the boiling point of water in fahrenheit is ' + boilingPointF)

