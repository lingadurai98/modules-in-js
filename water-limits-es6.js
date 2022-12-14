import nanometer, { milliToCenti, centiToMeter, celsiusToFahrenheit, fahrenheitToCelsius } from './converter.js'




const button = document.getElementById('button')

button.addEventListener('click', () => {
    let element = document.querySelector('.container')

    element.innerHTML = `<h1>${milliToCenti(23)}</h1>
    <h1>${centiToMeter(2000)}</h1>
    <h1> boiling Point is : ${celsiusToFahrenheit(100)} and freesing point is : ${celsiusToFahrenheit(0)}</h1>
    <h1>Human body tempratusre is :${fahrenheitToCelsius(98.6)} </h1>
    `
})
console.log(nanometer)

console.log(milliToCenti(23), centiToMeter(2000))