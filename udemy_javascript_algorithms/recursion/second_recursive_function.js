function sumRange (num) {
    // Base case: if num is 1, exit out 
    if (num === 1) return 1; 
    // But if the num is not 1 
    // Return it plus the function called again on a number that's one fewer 
    return num + sumRange(num - 1); 
}