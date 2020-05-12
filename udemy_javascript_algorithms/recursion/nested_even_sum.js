// Return sum of all even numbers in an object, when the object may contain more than numbers
// Input: Object; Output: Number, sum of numbers

// Pass in object _and_ sum
function nestedEvenSum(object, sum=0) {
  // Loop through object 
  for (var key in object) {
    // Check if key is an object
    // Add the recursive call with key as parameter to the sum if so
    if (typeof object[key] === 'object') {
      sum += nestedEvenSum(object[key]); 
    // Else, check if key is number and an even one
    } else if (typeof object[key] === 'number' && object[key] % 2 === 0) {
      sum+= object[key]; 
    }
  }
  return sum; 
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

nestedEvenSum(obj1);
