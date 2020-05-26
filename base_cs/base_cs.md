# Notes from the baseCS blog series

## [Bits, Bytes, Building with Binary](https://medium.com/basecs/bits-bytes-building-with-binary-13cb4289aafa)
- _Binary_: You count with two digits! 
- No matter number of digits, _counting_ functions the same: you increment digits in one place until you can't any more, and then add a digit to the next place 
- _Converting_ from integers to binary: Which power of two can I reach without going over the number I want to convert? Subtract, repeat, until left with 0. 
- On is 1, and Off is 0. 
- _Bit_: A single digit in binary 
- _Byte_: 8 bits 
- _Computer word_: Number of bits a computer can process at a time 

## [Hexes and other magical numbers](https://medium.com/basecs/hexs-and-other-magical-numbers-9785bc26b7ee)
- _Encoding_: Standardized way of translating between two things. 
- ASCII encoding: A set of rules for translating characters into numbers, including 0-9, upper and lowercase English alphabet, some special characters
- _Hexadecimal_: Base 16; used to represent colors
- The higher the base number of an encoding system, the fewer spaces needed to represent values, so, the fewer bytes needed 
- For rgb color format, each consecutive pair of digits in hex codes is converted into decimals for rgb; each decimal represents a byte, or 8 bits 
- Just 6 hexadecimal digits -> 16 million possible colors 
- Other hex values: debug values "hexspeak"; version formatting of IP addresses 

## [What’s a Linked List, Anyway? [Part 1]](https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d)
- _Data structures_: structural option for organizing information 
- _Linear_ data structure: sequence an order to how that structure is traversed. Like hopscotch, it requires sequential steps. E.g. arrays 
- _Non-linear_ data structure: no order needed! We can traverse non-lineraly, more like hide and seek. E.g. hashes, dictionaries, trees, graphs 
- Arrays *vs* Linked Lists: *Arrays* must take up contiguous blocks of memory (statci, next to each other), but *linked lists* can have the memory spread out (dynamic)
- An _array_ is a _static_ data structure, meaning it is created with a set amount of memory. All of its resources need to be allocated when it is created, and whether or not elements or added or deleted it always needs a fixed amount of memory. 
- A _linked list_ is a _dynamic_ data structure, meaning the amount of memory it needs can flex and change as well. 
- Linked lists are made up of _nodes_. The first node is the _head_, and the last node points to null. 
- Each _node_ is made up of both the data itself holds and a reference to whatever node comes next. It only knows what data it contains, and what comes next. It doesn't know how long the list goes, or where it starts or ends. 
- Which is why the Linked List doesn't need memory to be next to each other 
- _Singly linked_: nodes point in only one direction 
- _Doubly linked_: nodes reference both what comes next _and_ what came before 
- _Circular linked_: node that acts as a tail, and the node after the tail is the beginning 

## [What's a Linked List, Anyway? [Part 2]](https://medium.com/basecs/whats-a-linked-list-anyway-part-2-131d96f71996)
- __Big O Notation__: A way of evaluating the performance of an algorithm, the amount of time a function, action, or algorithm takes to run based on how many elements we pass to it. _The speed and efficiency with which something functions when its input grows to be any size.__ 
- **O(1)**: Constant time. 
- **O(n)**: Linear: as our input grows, so does the time and space to run. 
- **O(n^2)**: Grows exponentially. 

### Linked Lists
- All we need to do is rearrange our pointers (memory is not pre-allocated as with arrays)
- In general, linked lists are great for _adding and removing_, but not great for searching and finding. 

## [Stacks and Overflows](https://medium.com/basecs/stacks-and-overflows-dbcf7854dc67)
- _Call stack_: Structure that stores all things when a program is executed. 
- In the stack data structure, in order to add or remove elements, we must start at the top, e.g. like a stack of books. 
- This is known as _Last in, First out_ (LIFO).
- Often implemented as Linked Lists, because of only one direction to go (and, also non contiguous storage). 
- Arrays are difficult to use for setting up a stack because they require a set amount of space. 
- The stack will think it can grow infinitely large, but since an array has a set amount of memory that would be exceeded by adding more, this would lead to a _Stack Overflow_. 
- Stack methods: push (adds element to the top); pop (removes element from top); isEmpty (checks to see if stack is empty); top (checks which element is at the top of the stack); size (returns number of elements in a given stack at any given time)
- Stack examples: browser history; undo/redo; call stack 

## [To Queue or not to Queue](https://medium.com/basecs/to-queue-or-not-to-queue-2653bcde5b04)