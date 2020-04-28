// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    // Product variable to hold calculation
    let product = 0; 
    // Array to hold new array as it gets reduced 
    let newArr = []; 
    
    // Edge case: Array has no numbers? 
    if (arr.length === 0) {
        return 0; 
    }
    
    // Base case: array has only one number left 
    if (arr.length === 1) {
        return product; 
    }
    product = product * arr[0]; 
    newArr = arr.slice(1);
    return productOfArray(newArr); 
}