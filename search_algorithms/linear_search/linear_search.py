# This linear search takes two arguments: a list of items to search for, and the target. 
# It returns the index position of the target if found. 

def linear_search(list, target): 
    
    # For each item the range of the list, starting at the beginning 
    for i in range(0, len(list)):
        # If the target is at the list at position i 
        if list[i] == target: 
            # Return the index 
            return i
    # Else return None 
    return None

# Function to verify the output of the linear_search
def verify(index): 
    # If the index exists
    if index is not None: 
        # Print where it was found 
        print("Target found at index: ", index)
    else: 
        # Print that the target was not found 
        print("Target not found in list.")

# Test data sets 
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
strings = ["Truth Hurts", "Juce", "Cuz I Love You", "Tempo"]

# Printing results from test data 
result = linear_search(numbers, 12)
verify(result)

result = linear_search(numbers, 6)
verify(result)

result = linear_search(strings, "Truth Hurts")
verify(result)
