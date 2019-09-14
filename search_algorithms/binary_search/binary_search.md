# Binary search 

## What is binary search? 
*Binary search* sorts through a given _sorted_ list by starting at the midpoint. It evaluates whether a target is greater than or less than the midpoint value. If the target is _greater_ than the midpoint, binary search removes all data less than the midpoint. If that target is _smaller_ than the midpoint, it removes all values greater than the midpoint. Since binary search removes half of all values with each search, it's much more efficient than linear search. 

Important note: a list must be ordered in order for binary search to evaluate it. 

![Binary search over a set of numbers](https://www.cdn.geeksforgeeks.org/wp-content/uploads/Binary-Search.png)
_Visual via [Geeks for Geeks](https://www.geeksforgeeks.org/binary-search/)_. 

## Big O 
Since, on average, the size of the data that *binary search* evaluates gets smaller with each search, its runtime is *O(log n)*. 

We say on average because in the best case scenario, the midpoint is the target and only one search is performed. But, computer scientists don't care about best case! 

## When sould I use binary search? 
When your list is ordered! You should apply binary search when you are looking for a faster solution than linear search, and when you are working with large data sets. 

## In practice 
Look at the binary_search.py file for an example of binary search. In your termail, you can cd into binary_search and run `python binary_searchy.py` to test out the algorithm. 