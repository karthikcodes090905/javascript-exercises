const sumAll = function( a,b) {
 if(a>b){
    let temp = a ;
    a = b ; 
    b = temp ;
 }
 let sum = 0 ;
 for(let i = a ; i <= b ; i++){
    sum += i ;
 }
return sum ;
};

// Do not edit below this line
module.exports = sumAll;
