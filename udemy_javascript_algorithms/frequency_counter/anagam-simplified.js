function validAnagram(str1, str2) {
    // If the string lengths differ, return false 
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Create an object to make an index of the letters and counts in one of the strings
    const comparison = {};
  
    // Add every character in the first string to the comparison object as the key
    // And count the number of times it occurs as the value 
    for (let i = 0; i < str1.length; i++) {
      let letter = str1[i];
      comparison[letter] ? comparison[letter] += 1 : comparison[letter] = 1;
    }

    // Log the object you've created 
    console.log(comparison)

    // Now loop through the second string 
    for (let i = 0; i < str2.length; i++) {
      let letter = str2[i];
      // if the letter is not in the comparison object, exit out. This can't be an anagram. 
      if (!comparison[letter]) {
        return false;
      } else {
        // But, if the letter is in the comparison object, decrement its value (decrease the count) 
        comparison[letter] -= 1;
      }
    }
    // You'll return true if all letters have been accounted for and are at 0
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')