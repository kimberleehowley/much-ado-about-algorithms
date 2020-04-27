// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
    // Exception 
     if (exponent === 0) {
         return 1; 
     }
     
     // Edge case? 
     // Run through recursion until exponent is 1
     if (exponent == 1) {
         return base; 
     }
     
     // Iterative case 
     // Return the base times the result of the function called when the exponent is one fewer
     return base * power(base, exponent-1); 
 }