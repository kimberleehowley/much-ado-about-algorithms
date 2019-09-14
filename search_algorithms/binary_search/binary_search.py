# This binary search takes two arguments: a *sorted* list to search through and a target value. 
# Binary search uses a midpoint to evalue and remove sections of a data set when sorting. 
# It returns the index position of the target if found. 

def binary_search(list, target): 
    # Getting first and last index values 
    first = 0
    last = len(list) - 1
    
    # While the first data point is smaller than the last
    # Or, while we still have items in the list 
    while first <= last: 
        ## Get a midpoint 
        midpoint = (first + last)//2
        
        # If the midpoint is our target, return it 
        if list[midpoint] == target: 
            return midpoint 
        
        # Else, if the midpoint is less than our target,
        # Our new first value is the value of the old midpoint + 1 
        elif list[midpoint] < target: 
            first = midpoint + 1
            
        # Else, the midpoint must be greater than our target
         # So, our new last point is one smaller than our midpoint 
        else: 
            last = midpoint - 1
                
    # Return None if you can't find the value 
    return None

## Function to verify the output of the binary_search 
def verify(index): 
    if index is not None: 
        print("Target found at index: ", index)
    else: 
        print("Target not found in list")
 
# test data set 
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Printing results from test data 
result = binary_search(numbers, 12)
verify(result)

result = binary_search(numbers, 6)
verify(result)

