function maxSubarraySum(array, num){
    // Set up variables 
    let maxSum = 0; 
    let i = 0; 
    
    // Edge case: If there are not as many numbers as given, return null
    if (array.length < num) {
        return null; 
    }
    
    // Move through the array 
    for (let j = num; j <= array.length; j++) {
      let tempArray = array.slice(i, j); 
      let tempSum = tempArray.reduce((a,b) => a + b, 0); 
      if (tempSum > maxSum) {
          maxSum = tempSum; 
      }
      i++; 
    }
    return maxSum; 
  }

  function maxSubarraySum(nums, windowSize) {
    // Edge case: If the sub array num is larger than length of array, exit
    if (windowSize > nums.length) {
      return -Infinity;
    }
    // Store maxSum variable
    let maxSum = 0;
  
    // Start at the first number of the array
    // Add the 0-windowSize numbers together in subArray, save as temp sum
    let tempSum = nums.slice(0, windowSize).reduce((acc, num) => acc + num, 0);
  
    console.log(`maxSum:${maxSum} tempSum:${tempSum}`);
  
    // Start loop at j=1
    for (let j = 1; j < nums.length - windowSize + 1; j++) {
      console.log("in da looop");
  
      // Take TempSum, add array[j+1] to temp sum, subtract array[j-1]
      tempSum = tempSum - nums[j - 1] + nums[j + windowSize - 1];
      console.log(`tempSum: ${tempSum}`);
  
      // Compare TempSum to MaxSum
      if (tempSum > maxSum) {
        maxSum = tempSum;
      }
    }
    // Return the MaxSum
    return maxSum;
  }
                              // 1     3  4
  console.log(maxSubarraySum([1, 2, 3, 7, 8], 3));
  