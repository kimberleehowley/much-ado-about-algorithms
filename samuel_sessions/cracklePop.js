function cracklePop() {
    // For every number starting at 0 and up to 100 inclusive
    for (number = 0; number <=100; number++) {

        // If divisible by 3 and 5, print CracklePop
        if ((number % 3 === 0) && (number % 5 === 0)) {
            // Using console.log to print
            console.log("CracklePop");
        }
        // If the number is divisible by 3, print Crackle 
        else if (number % 3 === 0) {
            console.log("Crackle");
        }
        // If the number is divisible by 5, print Pop 
        else if (number % 5 === 0) {
            console.log("Pop"); 
        } 
        else {
            console.log(number);
        }
    }
}

// Call the function
cracklePop(); 