const convertToCelsius = function(fahrenheit) {
let celsius = fahrenheit - 32.0 ;
return celsius ;
};

const convertToFahrenheit = function(celsius) {
let fahrenheit = celsius + 32.0;
return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
