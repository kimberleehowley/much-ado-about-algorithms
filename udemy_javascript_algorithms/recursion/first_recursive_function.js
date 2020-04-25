function countDown(num) {
    // If the number is less than zero 
    if (num <= 0) {
        // We're done 
        console.log("All done!"); 
        return; 
    }
    // If not, console.log the number 
    console.log(num); 
    // Then decrease the number
    num--; 
    // And call the function again (recursively) on the decrease
    countDown(num); 
}