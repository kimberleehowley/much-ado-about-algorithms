function averagePair(array, target){
    // Edge case, if the array length is 0 or 1 
    if (array.length <= 1) {
        return false; 
    }
    
    // Set up variable indices that will move through array 
    // Pointer 1: Start at beginning 
    let i = 0; 
    // Pointer 2: Start at end 
    let j = array.length - 1
    
    // While the starting value is less than the end value 
    // Or, until the values meet in the middle 
    while (i < j) {
        // Store the average in a variable 
        let avg = (array[i] + array[j]) / 2;
        // If the average is the same as the target, return true
        if (avg == target) {
            return true; 
          // But if avg is too small, move the left number to the right
        } else if (avg < target) {
            i++; 
            // If avg is too big, move the right number to the left
        } else if (avg > target) {
            j--; 
        }
    }
    // If you make it all the way through and still nothing averages, return false 
    return false; 
  }