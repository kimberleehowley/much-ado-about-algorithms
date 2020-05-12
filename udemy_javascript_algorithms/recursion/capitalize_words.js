// Capitalize every word in an array, recursively. 
function capitalizeWords(strings) {
    // Check length of array, exit out if 0 (base case)
    if (strings.length === 1) {
        return [strings[0].toUpperCase()]; 
    }

    // Set up the result we'll return 
    // Since our exit case is when we only have 1 left in our array 
    // We want to pass through everything *but* the last value in the array 
    let result = capitalizeWords(strings.slice(0, -1));
    // Once that's passed through, we push through the last element in the array, upper case-d
    result.push(strings.slice(strings.length-1)[0].toUpperCase()); 
    return result; 
}


let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); 
// Non-recursive solution: strings.map((string) => string.toUpperCase());