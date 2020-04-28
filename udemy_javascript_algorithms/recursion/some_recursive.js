// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, callback){
    // Check if array[0] meets callback condition 
    // If it does, return True
    // If it does not, pass a shortened array to the callback
    // And go through the cycle again 
    // Until array.length == 0 (base case)
  }