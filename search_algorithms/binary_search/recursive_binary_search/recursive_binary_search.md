# Recursive binary search 

## What is recursion? 
A recursive function is one that calls itself. When writing a recursive function, we always need a stopping condition, or, "base case" that tells the function to stop running. 

## What is recursive binary search? 
With recursive binary search, the function calls itself, accepting the shortened list as an argument. 

Important note: just like in regular binary search, the list must be ordered in order for recursive binary to work. 

## Big O 
Since, on average, the size of the data that *binary search* evaluates gets smaller with each search, its runtime is *O(log n)*. 
 
## When should I use recursive binary search? 
If you need to go just a bit faster, you can use recursive. You won't be modifying first and last variables with a recursive function, so it could be especially useful to call in languages other than python that prefer not changing variable inputs as often. 

Also, when your list is ordered! You should apply binary search 

## In practice 
Look at the recursive_binary_search.py file for an example of binary search. In your terminal, you can cd into recursive_binary_search and run `python recursive_binary_searchy.py` to test out the algorithm. 