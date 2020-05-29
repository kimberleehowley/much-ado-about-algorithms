// Divide and conquer when a list is sorted!
// Pick a pivot point; then check right and left side.

// Psuedocode
// Function accepts a sorted array and a value we're looking for (only numbers)
// Create a left pointer at the start of the array; a right pointer at the end
// While the left pointer comes before the right pointer:
// Pick the middle. Is the middle what we're looking for?
// If it is, return the index.
// If it's too small, move the left pointer up to where the midPointer was.
// If it's too large, move the right pointer down to where the midPointer was.
// If not found, return - 1

function binarySearch(numbers, target) {
  // Assuming the numbers array is already sorted

  // Setting pointers outside of the loop (so can use in loop)
  let startIndex = 0;
  let endIndex = numbers.length - 1;
  // A middle is just an average, but we need to round to account for varying array lengths 
  let midPoint = Math.floor((startIndex + endIndex) / 2);

  // While the middle is NOT the target, and the start is less than the end (haven't gone through whole)
  while (numbers[midPoint] !== target && startIndex <= endIndex) {
    if (target < numbers[midPoint]) {
      endIndex = midPoint - 1;
    } else {
      startIndex = midPoint + 1;
    }
    midPoint = Math.floor((startIndex + endIndex) / 2);
  }
  if (numbers[midPoint] === target) {
    return midPoint;
  }
  return -1;
}

// binarySearch([1, 2, 3, 4, 5], 7);

// Time complexity
// O(log n)
// Best case: O(1)