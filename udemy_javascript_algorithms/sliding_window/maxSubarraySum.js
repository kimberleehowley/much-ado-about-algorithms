function maxSubarraySum(array, num){
    // Set up variables 
    let tempSum = 0; 
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