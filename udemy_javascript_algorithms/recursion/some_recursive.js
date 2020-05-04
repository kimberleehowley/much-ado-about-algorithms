// Function that accepts an array and a callback 
// Returns true if a single value in the array returns true when passed to the cb 
// Otherwise returns false 


// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, callback){
    
  // Edge case: when array.length === 0, return false
  if (array.length === 0) return false; 

  // If the first element passed to callback returns true, return true 
  if (callback(array[0]) === true) return true; 
  
  // Otherwise, call smaller array recursively 
  return someRecursive(array.slice(1), callback); 
}

console.log(someRecursive([11, 4, 6, 8], val => val > 10)); 