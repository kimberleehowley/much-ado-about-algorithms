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