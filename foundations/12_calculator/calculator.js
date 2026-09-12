const add = function(a,b) {
  return a + b ;	
};

const subtract =  function(a,b) {
  return a - b ;	
};

const sum = function(array) {
	return array.reduce((prev , current) => {
    prev += current ;
  },0);
};

const multiply =  function(array) {
	return array.reduce((prev , current) => {
    return prev *= current ;
  },1);
};

const power = function(base,exponent) {
  let ans = 1 ;
  exponent -= 1 ;
	while(exponent != 0 ){
   ans *= base ;
   exponent--;
  }
  return ans ;
};

const factorial = function(a) {
  let ans = 1 ;
	while(a != 0 ){
  ans *= a ;
  a--;
  }
  return ans ;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
