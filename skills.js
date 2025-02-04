// function to covert Celsius
// to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

//Driver code 
let celsius = 37;   // Celsius value   
let fahrenheit = celsiusToFahrenheit(celsius);   // call the function
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit');  // print the result