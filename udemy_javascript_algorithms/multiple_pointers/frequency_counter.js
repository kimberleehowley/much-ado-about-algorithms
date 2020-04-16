function countUniqueValues(array) {
  // Count the number of times different numbers show up in array
  // Input: sorted array; Output: number

  // What are our exit cases? 
  if (array.length == 0) {
      return 0; 
  }
  
  // Variable where we start counting
  let i = 0;

  // Loop starting at the next number over
  for (let j = 1; j < array.length; j++) {
    // If the values are not the same...
    if (array[i] !== array[j]) {
      // Increment i, so the array position moves along
      i++;
      // Then, after moving i up, set the value to be the same as new j
      arr[i] == arr[j];
    }
    // We don't need to do anything if the values are the same!
    // J increments automatically; i can stay put.
  }
  // Return the value of i + 1, because array indices start at 0
  return i + 1;
}
