// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { insertIntoArray, removeFromArray } from '../functions.js';


const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('insertIntoArray test: takes in an array and a value and adds that value to the array', (expect) => {
    const fruits = ['kiwi', 'apple', 'banana'];
    const newFruit = 'tomato';
    const expected = ['kiwi', 'apple', 'banana', 'tomato'];
    
    const actual = insertIntoArray(fruits, newFruit);

    expect.deepEqual(actual, expected);
});

test('removeFromArray test: takes in an array and a value and removes that value from the array', (expect) => {
    const fruits = ['kiwi', 'apple', 'banana'];
    const banana = 'banana';
    const expected = ['kiwi', 'apple'];
    
    const actual = removeFromArray(fruits, banana);

    expect.deepEqual(actual, expected);
});


