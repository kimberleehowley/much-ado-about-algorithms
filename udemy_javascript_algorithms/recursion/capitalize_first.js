// Non-recursive solution: 
function capitalizeFirst(strings) {
  // If array has no more values, or no values to start, return
  if (strings.length === 0) {
    return;
  }

  // Empty array that we'll push new values to
  let capitalizedStrings = [];

  for (let i = 0; i < strings.length; i++) {
    // First letter
    let firstLetter = strings[i].charAt(0);
    // Remainder of string
    let remainingString = strings[i].slice(1);
    // If the letter is not capitalized
    if (firstLetter !== firstLetter.toUpperCase()) {
      capitalizedStrings.push(
        firstLetter.toUpperCase().concat("", remainingString)
      );
    }
  }
  return capitalizedStrings;
}

// Recursive solution 
function capitalizeWords(array) {
    // Base case: If length is 1, or once length is 1
    if (array.length === 1) {
      // Return the word with the first letter capitalized 
      // By capitalizing first letter then concatenate remaining string   
      return [array[0].charAt(0).toUpperCase().concat("", array[0].slice(1))];
    }
    // If length is not 1, call the function recursively with a shortened array (minus last element)
    let res = capitalizeWords(array.slice(0, -1));
    // Push capitalized version to the array 
    res.push(array.slice(array.length-1)[0].charAt(0).toUpperCase().concat("", array[array.length-1].slice(1)));
    return res;
   
  }

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
console.log(capitalizeWords(["car", "taco", "banana"]));
