// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
    // Edge case: Repeat until 1 item in array, when you return just that one number
    if (arr.length === 1) {
        return arr[0]; 
    }
    
    // Take first item in array 
    // Multiply by first item in new array without first 
    return arr[0] * productOfArray(arr.slice(1)); 
     
}