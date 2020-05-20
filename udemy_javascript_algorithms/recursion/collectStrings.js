// Accepts an object and returns an array of the values in the object that have the type string 
function collectStrings(object) {
    // Empty array to return at end 
    let arrayOfStrings = []; 
    
    // Loop through the object 
    for (let key in object) {
        // Is the value a string? 
        if (typeof object[key] === "string") {
            // If so, push to new array 
            arrayOfStrings.push(object[key])
        } 
        // Else, is the value an object? 
        else if (typeof object[key] === "object") {
            // If so, set the value of the array of strings to be that array also concatenating the recursive call to the function
            arrayOfStrings = arrayOfStrings.concat(collectStrings(object[key])); 
        }
        // Not worrying about arrays. Assuming if a key has array type, don't have to loop through. 
        // So, if not an object or a string, we don't have to do anything 
    }
    return arrayOfStrings; 
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj); 