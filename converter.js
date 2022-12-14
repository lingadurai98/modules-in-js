// converter.js

// old function 
// function celsiusToFahrenheit(celsius) {
//     return celsius * (9 / 5) + 32
// }

/**
// Exporting old function
module.exports.celsiusToFahrenheit = celsiusToFahrenheit

// Declaring function another function
module.exports.fahrenheitToCelsius = function (fahrenheit) {
    return (fahrenheit - 32) * (5 / 9)
} 
*/

// Es6 modules
export function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32
}

export const fahrenheitToCelsius = function (fahrenheit) {

    console.log(fahrenheit)
    return (fahrenheit - 32) * (5 / 9)
}

// export { celsiusToFahrenheit, fahrenheitToCelsius }

export const milliToCenti = (m) => {
    return m / 10
}

export const centiToMeter = (c) => c / 100

const nanometer = .0000001

export default nanometer;   


