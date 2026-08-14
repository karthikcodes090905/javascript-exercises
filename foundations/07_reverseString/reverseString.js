const reverseString = function(str) {
let intermediate = str.split(" ");
let resultantArray = intermediate.map((word) => {
    let ans = "" ;
    for(let i = word.length-1 ; i >= 0 ; i--){
        ans += word[i];
    }
    return ans ;
}) ;

return resultantArray.reverse().join(" ");
}
/*
let final = "";
for(let i = resultantArray.length-1 ; i >=0 ; i--){
    final += resultantArray[i] + " ";
}
return final ;
};*/

// Do not edit below this line
module.exports = reverseString;
