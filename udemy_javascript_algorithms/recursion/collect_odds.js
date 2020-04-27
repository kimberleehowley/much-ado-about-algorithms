function collectOdds(arr) {
    let result = []; 

    function helper(helperInput) {
        // If input empty (arr below) is empty, return 
        if(helperInput.length === 0) {
            return; 
        }

        // If element not divisible by 2, we push into result 
        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        // Then, call helper on the rest of the array (check remaining nums)
        // Looking at first element and shrinking array with .slice 
        helper(helperInput.slice(1));
    }

    helper(arr); 
    return result; 
}