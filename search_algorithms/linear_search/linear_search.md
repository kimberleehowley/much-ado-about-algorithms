# Linear search

## What is linear search? 
*Linear search* goes through each item in a list, one by one, until either it finds what it's looking for, or, if it doesn't find what it's searching for, exits out. 

![Linear search](https://www.geeksforgeeks.org/wp-content/uploads/Linear-Search.png)
_Image via [Geeks for Geeks](https://www.geeksforgeeks.org/linear-search/)_.

## Big O
Since *linear search* goes through every single item in a list, the amount of time it takes depends directly on the size of the list. Representing n as the number of items in the list, the runtime is *O(n)*. 

## When should I use linear search? 
If you're working with a _very_ small data set, linear search might make sense. But, it doesn't scale efficiently, so other options make more sense for most real-world applications. 

## In practice 
Look at the linear_search.py file for examples of this algorithm in practice. 

You can test the linear search function by cd'ing into the linear_search directory and running `python linear_search.py` in the terminal. 