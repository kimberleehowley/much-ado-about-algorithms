function isSubsequence(str1, str2) {
    // Pointer variables 
    let i = 0; 
    
    // Go through the second string 
    for (let j = 0; j < str2.length; j++) {
        // Variable for letters 
        let str1_letter = str1[i]; 
        let str2_letter = str2[j]; 
        // Is the str1_letter ever in str2? 
        // If current str2_letter == str1_letter
        if (str1_letter == str2_letter) {
            // Increment str1_index, check for rest of letters in str1
            i++; 
        }
        // If the str1 index has incremented enough that we've gone through the whole string
          if (i == (str1.length - 1)) {
          // Congrats, you have a subsequence
          return true; 
          }
        // J auto-increments
    }
    // Else, no subsequence, you went through it all, return false 
    return false; 
  }