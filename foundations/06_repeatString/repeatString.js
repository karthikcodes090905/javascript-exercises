const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

module.exports = repeatString;


/* const repeatString = function(str , a) {
let result = " ";
let i = 0 ;
while(i<a){
    result += str;
}
return result ;
};

// Do not edit below this line
module.exports = repeatString;
