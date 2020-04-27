// Iterative solution 
function factorial(num) {
    let total = 1; 
    // Loop through the number, decrementing
    for (let i = num; i > 1; i--) {
        // Multiply the total by the next number down
        total *= i; 
    }
    // Return the total 
    return total; 
}

// Recursive solution 
function factorial(num) {
    // Base case: if the num is 1, return 1, exit out
    if (num === 1) return 1; 
    // Recursive call
    // If larger than 1, keep multiplying by smaller numbers 
    return num * factorial(num-1); 
}