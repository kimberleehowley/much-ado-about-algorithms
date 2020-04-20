function sameFrequency(num1, num2){
    // Convert to strings 
    let string1 = num1.toString(); 
    let string2 = num2.toString(); 
    // Set up empty comparison object 
    let comparison = {}; 
    
    // Edge case: if lengths are not equal, exit out 
    if (string1.length !== string2.length) {
        return false; 
    }
    
    // Loop through the first string number, setting up comparison 
    for (let i = 0; i < string1.length; i++) {
        // Store number variable 
        let number = string1[i]; 
        // If the number is in the object, increment its value 
        // Else, add it and set value to 1 
        comparison[number] ? comparison[number] +=1 : comparison[number] = 1; 
    }
    // Loop through second string 
    for (let i = 0; i < string2.length; i++) {
        let letter = string2[i]; 
        // If the letter is not in the comparison, exit out
        if(!comparison[letter]) {
            return false; 
        } else {
            // If it is, decrement the value in the comparison 
            comparison[letter] -= 1; 
        }
        // Return true if you've decremented everything, no values left
        return true; 
    }
}
