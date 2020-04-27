function outer(input) {

    // Useful when collecting patterns of array or other values
    var outerScopedVariable = []; 

    function helper(helperInput) {
        // Modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input); 

    return outerScopedVariable; 
}