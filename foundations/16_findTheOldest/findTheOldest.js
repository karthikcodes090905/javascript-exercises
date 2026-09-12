const findTheOldest = function(people) {

  let oldest = people.reduce((oldest, current) =>{
   let currentAge = (current.yearOfDeath || new Date().getFullYear()) - current.yearOfBirth ;
   let oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth ;
   if(currentAge > oldestAge) return current ;
   else return oldest ;
  } , people[0]);

 return oldest ;




    /*
 let age = people.map((person) =>{
    let born = person.yearOfBirth ;
    let die = person.yearOfDeath ;
    return age  = die - born ; 
 });

 let oldest = Math.max(...age);
 return oldest ;
 */
};

// Do not edit below this line
module.exports = findTheOldest;
