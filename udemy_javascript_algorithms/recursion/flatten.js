// Write a recursive function called flatten
// Accepts an array of arrays and returns a new array with all values flattened 

function flatten(array) {
    
    // New variable for array 
    let newArray = []

    // Loop through the original array 
    for (let i = 0; i < array.length; i++) {
        // Check if the first element is an array 
        if (Array.isArray(array[i])) {
            // If it is, then concatenate it with the new array, recursively to separate out number by number
            newArray = newArray.concat(flatten(array[i])); 
        } else {
            // If it is not an array, push the element to the new Array 
            newArray.push(array[i])
        }
    }
    return newArray; 
 };

flatten([1, 2, 3, [4, 5] ]); 