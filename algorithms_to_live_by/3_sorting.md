## Sorting 
This chapter is about well, making order out of disorder. 

### Big-O notation 
Big-O measures an algorithm's performance in terms of the relationship between the size of the problem and the program's running time. 
* *Constant time*, or *O(1)* does not depend on the size of the problem, e.g. dinner party house-cleaning: no matter how many guests you invite, it will still take the same amount of time to clean your house. 
* *Linear time*, or *O(n)* does in fact depend on the size of the problem, e.g. dinner party plate passing: the size of the table determines how long it takes to pass around the chocolate cake. 
* Quadric time*, or, *O(n^2)* is when both the time _and_ the program itself gets larger, e.g. dinner party guests exchanging hugs. 
* *Exponential time*, or *O(n^2)* is even worse, doubling your work with every guest. 

### Bubble sort 
#### What is bubble sort? 
##### BaseCS also has a great explainer: [Bubbling up with Bubble Sorts](https://medium.com/basecs/bubbling-up-with-bubble-sorts-3df5ac88e592)
The bubble sort algorithm has a bad rep: President Obama even made a joke about it when he went to visit Google. It involves starting at the beginning of a list, comparing each item to the one that comes after by size, making a swap if needed, then moving on to the next pair. Once it reaches the end of the list, it loops through again looking for incorrect ordering. 

It gets its name because, effectively, it moves the largest unsorted number to the last or next to last place at any given time, "bubbling up" the larger values with each iteration. 

Other rules: after x iterations, the last x elements of a list do not need to be compared. 

#### Visual 
![Bubble sorting through a set of numbers.](https://codingcompiler.com/wp-content/uploads/2017/10/bubble-sort-in-c.png)

_Visual via [CodingCompiler.com](https://codingcompiler.com/bubble-sort-program-in-c-using-function/). 

#### Big O 
Assuming every item needs to be swapped in some way, and we have to go through the list again every time we reach the end, our runtime complexity is *O(n^2)*. 

In general, we can estimate the number of times we'll have to iterate through with n -1, where n is the number of items in our list. 

#### When should I use it? 
Bubble sort has a really bad reputation! But, since it's easy to understand, if you don't care about timing, or, you have a very small data set, it could be useful...maybe. 

#### In practice 
Look at the bubble_sort.py file for an example of a bubble sort implementation. In your terminal, you can cd into bubble_sort and run `python bubble_sort.py` to test out the algorithm. 

### Insertion sort 