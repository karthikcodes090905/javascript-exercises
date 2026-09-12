const fibonacci = function(x) {
let arr = [] ;
arr[0] = 1 ;
arr[1] = 1 ;
for(let i  = 2 ; i < x ; i++){
    arr[i] = arr[i-2] + arr[i-1] ;
}
return arr[x-1] ; 
};

// Do not edit below this line
module.exports = fibonacci;
