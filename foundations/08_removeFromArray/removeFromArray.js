const removeFromArray = function (arr , x) {
 
    let result = [];
    arr.forEach((nums) => {
        if(!arr.includes(nums)){
            result.push(nums);
        }
    });
    return result ;
 
};

// Do not edit below this line
module.exports = removeFromArray;
