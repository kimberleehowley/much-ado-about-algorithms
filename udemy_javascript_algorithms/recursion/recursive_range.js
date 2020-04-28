function recursiveRange(num){
    // Edge case, keep adding to num - 1 until num is 1
    // One will be returned as the last thing to add 
    if (num === 1) {
        return 1; 
    }
    // Take number 
    // Add it to num - 1
    return num + recursiveRange(num-1); 
 }