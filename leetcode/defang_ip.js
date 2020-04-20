/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
    // Check to confirm IP address valid format 
        // Check that three periods (four parts)
        // And that each part is not greater than 255 

    // Set up empty string 
    let defanged = ""; 
    
    // Loop through every character in original string
    for (let i = 0; i < address.length; i++) { 
        // If the character in original string is the same as a period
        if (address[i] === ".") {
            // Push brackets up to defanged 
            defanged = defanged + "[.]"
        } else {
            // Otherwise just push the character 
            defanged = defanged + address[i]; 
        }
    }
    return defanged; 
};