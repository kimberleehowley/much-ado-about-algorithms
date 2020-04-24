function findLongestSubstring(string){
    let start = 0; // Window value
    let tracker = {}; // For counting the values we see 
    
    let maxLength = 0;  
    
    // Edge case, empty or nonexistent string 
    if (string === '' || string.length === 0) {
        return 0; 
    }
    
    // Edge case, if one letter just return 1 
    if (string.length === 1) {
        return 1; 
    }
    
    // Go through the string
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        // If the letter is in our tracker 
        if (tracker[letter]) {
            // Start at whichever was the one already seen 
            start = Math.max(start, tracker[letter]);
        }
        // The max is either the current max value or the length of the substring
        maxLength = Math.max(maxLength, i - start + 1)
        // Store index of next character 
        tracker[letter] = i + 1; 
    }
     return maxLength;     
  }
  