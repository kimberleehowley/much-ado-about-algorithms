function sumRange (num) {
    // Base case: if num is 1, exit out 
    if (num === 1) return 1; 
    // Changing input: Return the num plus the num - 1 
    return num + sumRange(num - 1); 
}