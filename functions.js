// write a function that adds the newItem to the existing array. Be sure and take a look at the test and remember that pure functions always return something!
export function insertIntoArray(someArray, newItem) {
    someArray.push(newItem);
    return someArray;
}

// write a function that removes an existing item from an array. 
export function removeFromArray(someArray, arrayItem) {
    someArray.pop(arrayItem);
    return someArray;  
}