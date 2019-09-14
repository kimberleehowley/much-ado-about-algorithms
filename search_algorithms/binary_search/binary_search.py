## A binary search splits a list into segments, comparing the midpoint of the list to the value before or after it to then decide what part of a list to remove before repeating. 

def binary_search(list, target): 
    ## Getting first and last values 
    first = 0
    last = len(list) - 1
    
    while first <= last: 
        ## Defining midpoint 
        midpoint = (first + last)//2
        
        ## If the midpoint is our target, return it 
        if list[midpoint] == target: 
            return midpoint 
        
        ## Else, if the midpoint is less than our target,
        ## Start the first point over at the next value after the midpoint
        elif list[midpoint] < target: 
            first = midpoint + 1
            
        ## Else, the midpoint must be greater than our target
         ## So move the last to one less than the midpoint 
        else: 
            last = midpoint - 1
                
    return None

## Test function to verify result 
def verify(index): 
    if index is not None: 
        print("Target found at index: ", index)
    else: 
        print("Target not found in list")
 
## Sample data set 
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

result = binary_search(numbers, 12)
verify(result)

result = binary_search(numbers, 6)
verify(result)
