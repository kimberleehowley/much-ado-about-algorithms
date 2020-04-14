function validAnagram(str1, str2){
  
    // Compare lengths; return false if lengths differ
    if (str1.length !== str2.length) {
        return false; 
    }
    
    // Create our counter objects 
    // Empty placeholders
    let str1_counter = {}; 
    let str2_counter = {}; 
    
    // Loop through corresponding string; add count to corresponding object 
    for(let char of str1) {
        str1_counter[char] = (str1_counter[char] || 0) + 1;
    }
    
    for (let char of str2) {
        str2_counter[char] = (str2_counter[char] || 0) + 1;
    }
    
    // Make comparisons, using keys of counter objects
    for(let key in str1_counter){
        // If the key in the first is not in the second, return false
        if(!(key in str2_counter)){
            return false; 
        }
        // If the key doesn't occur the same number of times (if the values differ), return false 
        if((str1_counter[key] !== str2_counter[key])){
            return false; 
        }
    }
    // Otherwise, you have an anagram, return true!
    return true; 
  }