// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(string){
    // Outer variable to reverse string
      var reversed = ""; 
  
      // Helper function that reverses our string 
      function reverse(string){
          // Go through the length of the string, starting at the last letter, until the first 
          for (let i = string.length - 1; i >= 0; i--) {
              // Add each letter in reverse order to the empty string
              reversed = reversed + string[i];
          }
      }
  
      // Call the helper function 
      reverse(string);
      
      // Check if the reversed is the same as the original 
      if (reversed === string) {
          // If yes, return true
          return true; 
      }
  
      // If different, return false 
      return false; 
  }