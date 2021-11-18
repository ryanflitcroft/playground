// write a function that adds the newItem to the existing array. Be sure and take a look at the test and remember that pure functions always return something!
export function insertIntoArray(someArray, newItem) {
    someArray.push(newItem);
    return someArray;
}

// write a function that removes an existing item from an array. 
export function removeFromArray(someArray, arrayItem) {
    // index of arrayItem ??
    for (let i in someArray) {
        if (someArray[i] === arrayItem){
            someArray.splice(i, 1);
        }
    } return someArray;
}

// write a function that takes in two arrays and returns a new array that is a combination of the first two.
export function concatArrays(array1, array2) {
    const array3 = array1.concat(array2);
    return array3;
}

// write a function that takes in an array and returns a new array that is comprised of the first two indexes of the original array
export function sliceArray(someArray) {
    const newArray = someArray.slice(0, 2);
    return newArray;
}