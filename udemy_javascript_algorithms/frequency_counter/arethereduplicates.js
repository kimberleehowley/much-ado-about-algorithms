function areThereDuplicates(...args) {
    // Empty comparison 
    let comparison = {}; 
    
    for(let i = 0; i < arguments.length; i++) {
        // Set up variable for arg 
        let arg = arguments[i]; 
        
        // If arg not in the comparison, set it equal to 1 
        if(!comparison[arg]) {
            comparison[arg] = 1; 
        } else {
          // If the arg key is in comparison object, return true, there are dupes 
          if(comparison[arg]) {
            return true; 
          }
        }
        
    }
    // If you make it all the way through without finding any dupes, return false 
    return false; 
  }