//Exercise One
//Multiply 5 with 2, and display the result with an alert.
//This can be verified in the console of your live served site. Write your code below.
alert(5 * 2);

//Exercise Two
//Console.log the remainder when 15 is divided by nine. This can be verified in the console of your live served site. Write your code below.
console.log(15 % 9);


//Exercise Three
//Below each variable, write its data type in comments.
const numberOfApples = 4;
// number

const homeTown = 'Midland';
// string

const fruits = ['apple', 'kiwi', 'banana', 'tangelo'];
// array

const captain = {
    firstName: 'Malcom',
    lastName: 'Reynolds'
};
// object

//Exercise Four
//Console.log the lastName property of the below object
const bestCharacter = {
    firstName: 'Varric',
    lastName: 'Tethras'
};
console.log(bestCharacter.lastName);

//Exercise Five
//Create an object called user with a name of Bailey, and age of 32, and a loggedIn key where the value is a boolean set to true.
const bailey = {
    name: 'Bailey',
    age: 32,
    loggedIn: true
}

//Exercise Six
//References the object you created in exercise five
//In a template literal, using dot notation to access object values, console.log the phrase:  'It is true that Bailey is logged in.'
console.log(`It is ${bailey.loggedIn} that ${bailey.name} is logged in.`)

//Exercise Seven
//Below is an array of books.  Access 'The Name of the Wind' and set it to a variable.  Console.log this variable.
const books = ['The Lord of the Rings', 'Lord of the Flies', 'The Name of the Wind', 'Gone with the Wind'];
const thisBook = books[2];
console.log(thisBook);
