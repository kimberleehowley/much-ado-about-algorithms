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
    
    // Create a new, sorted array 
    // Because .sort changes array in place, we use spread 
    let sorted = [...nums].sort((a,b) => a-b); 
    
    // Use the sorted array as a comparison 
    // Call .map on the original nums array to create a new array that: 
    // Returns the index of where that number occurs in the sorted array 
    
    return nums.map(num => sorted.indexOf(num));
};