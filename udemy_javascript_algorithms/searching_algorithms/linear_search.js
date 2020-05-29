// If unsorted, this is how we have to search 
// indexOf, includes, find, findIndex are all doing linear searches 

// Function accepts an array and a value 
function linearSearch(numbers, target) {
    // Loop through the array and check if the current element is equal to the target
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            // If it is, return the index at which the element is found 
            return i; 
        }
    }
    // If not found, return -1  
    return -1; 
}

// linearSearch([1, 2, 3], 3); 