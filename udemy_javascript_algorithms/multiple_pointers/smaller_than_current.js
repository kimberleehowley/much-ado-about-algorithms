/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // Count the number of numbers smaller than a value at an index
    // Input: array && Output: array
        
    // Exit case: if there is 1 or 0 numbers in the array, output will be 0 
    if (nums.length == 0) {
        return 0; 
    }
    
    // Setting up output 
    let output = []; 
    
    // Sorting numbers 
    let sorted = nums.sort(); 
    
    // Variable where we start counting 
    let i = 0; 
    let count = 0; 
    
    // Loop through the array 
    for (let j = 1; j < sorted.length; j++) {
        // If the number to the right of i is bigger 
        if (sorted[j] < sorted[i]) {
            // Increment the count,  
            count++; 
        }
        // Do nothing if it's greater than or the same 
        // Once we've gone through rest of array, push the count to output 
        output.push(count);
        // Check the next number 
        i++; 
    }   
    // Output the array you've been creating as you go
    return sorted; 
};