// Write a recursive function called flatten
// Accepts an array of arrays and returns a new array with all values flattened 

function flatten(array) {
    // Create array from first '[' to next '['
    // let newArray = array.slice(0, array.indexOf('[')); 
    // console.log(newArray); 
    // Look at remaining numbers, make new array until next '[' 
    let remaining = array.slice(array.indexOf('[')); 
    console.log(remaining); 
    // Or, if no next '[' before the end, create array of remaining numbers 
    // Then, concatenate together 
 };

flatten([1, 2, 3, [4, 5]]); 