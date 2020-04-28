function reverse(string){
    // Edge case: When string length just 1, return 
    // Also, if length 0, just return 
    if (string.length <= 1) {
        return string; 
    }
    
    // Find last letter in string 
    // Add it to the beginning of new (maybe just concatenate)
    // Repeat with shorter new string (recursive case)
    return string.slice(-1) + reverse(string.slice(0, string.length-1));
  }
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'