## A recursive function is one that calls and references itself. 

## Binary search finds the midpoint of a list, then compares that midpoint in relation to a point before or after it, cutting off irrelevant parts of the list once that information is gathered. 

## Recursive binary search with start and end initialized 
### This is the most efficient solution, because slice takes additional time 

def recursive_binary_search(list, target, start=0, end=None):
    # Base case 
    if end is None:
        end = len(list) - 1
    if start > end:
        return -1

    # Establishing midpoint
    mid = (start + end) // 2

    if target == list[mid]:
        return mid
    else:
        if target < list[mid]:
            return recursive_binary_search(list, target, start, mid-1)
        else:
            return recursive_binary_search(list, target, mid+1, end)

## Recursive binary search with slices (less efficient) 
def recursive_binary_search(list, target):
    
    # If an empty list passed in, return False
    if len(list) == 0: 
        return False 
    else: 
        midpoint = (len(list))// 2
        
        if list[midpoint] == target: 
            return True 
        else: 
            # If value at midpoint less than target 
            if list[midpoint] < target: 
                return recursive_binary_search(list[midpoint+1:], target)
            else: 
                return recursive_binary_search(list[:midpoint], target)

def verify(result): 
    print("Target found: ", result)
    
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
result = recursive_binary_search(numbers, 12)
verify(result)

result = recursive_binary_search(numbers, 6) 
verify(result) 
