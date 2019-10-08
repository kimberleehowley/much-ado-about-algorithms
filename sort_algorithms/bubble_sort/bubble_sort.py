# Our template bubble sort takes one argument: a sequence. 

# Then, it compares two adjacent numbers. If the numbers need to be swapped, it does a swap, then continues by comparing the swapped number to the next in the list. Once it's reached the end of the list, it repeats the process over again. 

# This template includes many comments and print statements to visualize what's going on, but this will still work if you delete. 

def bubble_sort(sequence): 

    # Set a boolean value to control our loop (a flag). 
    is_sorted = False

    # While the boolean is not its assigned value, go through the loop 
    while not is_sorted: 
        
        # Set the flag to true
        is_sorted = True 

        # Loop through every item in the sequence 
        for i in range(len(sequence) - 1): 
            
            # Print out that we're about to compare left and right values 
            print("comparing " + str(sequence[i]) + " and " + str(sequence[i + 1]))
    
            # If the left value is greater than the right, it needs to get moving! 
            if sequence[i] > sequence[i+1]: 
                
                # Let the user know we're about to swap 
                print("SWAPPING " + str(sequence[i]) + " and " + str(sequence[i + 1]))

                # Swap with an assignment operator 
                sequence[i], sequence[i + 1] = sequence[i + 1], sequence[i]

                # Print the swapped result 
                print("Sequence is now " + str(sequence))

                # Reset the flag so we loop again 
                is_sorted = False
            
            # Print a statement once the original leftmost value sequence[i] has reached the end of the list 
            print("One full pass through sequence.")
            print("Is sequence sorted? " + str(is_sorted))

    # Once we've finished, print the final sequence
    print("The final order is " + str(sequence))
    return sequence 

bubble_sort([10, 13, 6, 4, 21, 1])

        