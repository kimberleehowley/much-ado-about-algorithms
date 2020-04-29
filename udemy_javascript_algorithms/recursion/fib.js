// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// Iterative solution // 
function fib(num) {
  // Set up an array with the first two fib numbers
  let array = [1, 1];

  // Iterate through in a loop, adding array elements together
  // For num - 2 times because there are already two elements in the array
  for (let i = 0; i < num - 2; i++) {
    array.push(array[i] + array[i + 1]);
  }

  // Return the last element in the array
  return array.pop();
}

// Recursive solution // 
function fib(n){
    // If the number is less than or equal to 2, return 1 
    // 1 is the first two numbers in the sequence 
    if (n <= 2) return 1;

    // Otherwise, return fib(n-1) + fib(n-2)
    return fib(n-1) + fib(n-2);
}