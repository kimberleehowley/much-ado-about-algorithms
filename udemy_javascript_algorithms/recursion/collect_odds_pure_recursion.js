function collectOddValues(arr) {
    // Create new array value, to hold results 
    // Is an empty array each time function is called 
    let newArr = []; 
    // If the array doesn't have any numbers (length 0)
    if (arr.length === 0) {
        // Return the array; it's either empty or we've sliced through 
        return newArr; 
    }

    // But, if the first element in the array is not divisible by 2
    if(arr[0] % 2 !== 0) {
        // Add the first element of the array to our new Array 
        newArr.push(arr[0]);
    }

    // Set the new array equal to concatenated arrays created 
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr; 
}