// Iterative solution 
function factorial(num) {
    let total = 1; 
    // Loop through the number, decrementing it
    for (let i = num; i > 1; i--) {
        // Multiply the total by the next number down
        total *= i; 
    }
    // Return the total 
    return total; 
}

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num) {
    // Edge case: if num is 0, the factorial will always be 1
    if (num === 0) {
        return 1; 
    }
    
    // Base case: if the num is 1, return 1 (you'll multiply by 1 below)
    if (num === 1) return 1; 
    // Recursive call
    // If larger than 1, keep multiplying by smaller numbers 
    return num * factorial(num-1); 
}

