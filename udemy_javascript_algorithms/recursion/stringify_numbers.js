// Function takes an object and finds all of the values that are numbers and converts them to strings

// Solution modifying the existing object // 
function stringifyNumbers(object) {
  for (let key in object) {
    if (typeof object[key] == "number") {
      // Convert that number to a string
      // And make sure it gets put back in the object
      object[key] = object[key].toString();
    }
    // If the value is an object, call the function recursively
    if (typeof object[key] == "object") {
      stringifyNumbers(object[key]);
    }
  }
  // Return the object once you've looped through 
  return object; 
}

// Solution that does not modify the existing object // 
function stringifyNumbersNewObject(obj) {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbersNewObject(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

stringifyNumbers(obj);
