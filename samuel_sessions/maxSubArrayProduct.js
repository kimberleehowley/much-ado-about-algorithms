// Given an array and a number n, return the maximum product of a subArray of length n. 

function maxSubarrayProduct(nums, windowSize) {
    // Edge case: If the sub array num is larger than length of array, exit
    if (windowSize > nums.length) {
      return -Infinity;
    }
    // Store maxProduct variable
    let maxProduct = 0;
  
    // Start at the first number in the array
    // Multiply the 0-windowSize numbers together in subArray, save as temp sum
    let tempProduct= nums.slice(0, windowSize).reduce((acc, num) => acc * num, 1);
  
    console.log(`maxProduct:${maxProduct} tempProduct:${tempProduct}`);
  
    // Start loop at j=1
    for (let j = 1; j < nums.length - windowSize + 1; j++) {
  
      // Take TempProduct, divide it by the number leaving the window 
      // Multiply the rest by the number remaining in the window 
      tempProduct = (tempProduct / nums[j - 1]) * (nums[j + windowSize - 1]);
      console.log(`tempProduct: ${tempProduct}`);
  
      // Compare TempSum to MaxSum
      if (tempProduct > maxProduct) {
        maxProduct = tempProduct;
      }
    }
    // Return the MaxSum
    return maxProduct;
  }

  console.log(maxSubarrayProduct([1, 2, 3, 7, 8], 3));