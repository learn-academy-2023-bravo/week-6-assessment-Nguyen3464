// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("allAbout", () => {
const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
  it("take an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(allAbout(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

/*
 FAIL  ./code-challenges.test.js
  allAbout
    ✕ take an array of objects and returns an array with a sentence about each person with their name capitalized

  ● allAbout › take an array of objects and returns an array with a sentence about each person with their name capitalized

    ReferenceError: allAbout is not defined
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// b) Create the function that makes the test pass.

/*
Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
Pseudocode: 1.) Create a function called allAbout
2.) allAbout will take an array of objects as an argument
3.) use .map() to iterate over the argument and access value at index; which is an object
4.) create a variable called capitalizedWords.
5.) use .name to access the key name's value and use .split(' ') to split key's value into an array of words
6.) create a variable called capitalizedName and use .map() to iterate over capitalizedWords
7.) use .charAt(0) and .toUpperCase() to capitalize the first index of the string, and add it to the remainding word.
8.) use .slice(1) to access the remainder of the string
9.) create a variable called capitalizedName, use .join() on capitalized words to combine the elements in the array and change them to a string data type
10.) return a string interpolated sentence using capitalizedName, and .notation to access the object's key's value for occupation.

*/

const allAbout = (array) => {
  return array.map(value => {
    const splitKeysValue = value.name.split(' ')
    const capitalizedWords = splitKeysValue.map(value => value.charAt(0).toUpperCase() + value.slice(1))
    const capitalizedName = capitalizedWords.join(' ')
    return `${capitalizedName} is ${value.occupation}.`
  })
}

/*
 PASS  ./code-challenges.test.js
  allAbout
    ✓ take an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainderOf3", () => {
const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]  
  it("take in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(remainderOf3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainderOf3(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

/*
FAIL  ./code-challenges.test.js
  allAbout
    ✓ take an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
  remainderOf3
    ✕ take in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

  ● remainderOf3 › take in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

    ReferenceError: remainderOf3 is not defined
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// b) Create the function that makes the test pass.

/*
Pseudocode: 1.) Create a function called remainderOf3
2.) remainderOf3 will take in a mixed data type array
3.) use typeof() and === equality operator, and  .filter() to filter out only the intergers
4.) use .map() and % operator to return the values have remainders when divided by 3

*/

const remainderOf3 = (array) => {
  return array.filter((value) => typeof value === "number").map(value => value % 3)
};

/*
 PASS  ./code-challenges.test.js
  allAbout
    ✓ take an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
  remainderOf3
    ✓ take in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubedSum", () => {
const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125  
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(cubedSum(cubeAndSum1)).toEqual(99)
    expect(cubedSum(cubeAndSum2)).toEqual(1125)
  })
})

/*
 FAIL  ./code-challenges.test.js
  allAbout
    ✓ take an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
  remainderOf3
    ✓ take in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
  cubedSum
    ✕ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)

  ● cubedSum › takes in an array of numbers and returns the sum of all the numbers cubed

    ReferenceError: cubedSum is not defined
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// b) Create the function that makes the test pass.

/*
Pseudocode: 1.) create a function called cubedSum
2.) cubedSum will take in a array as argument
3.) use .map() to iterate over the array use exponential operator to cube the value at index.
4.) use .reduce() to add the acumulating sum when iterating over index.
5.) .reduce take two arguments, acumulative sum, and value at index.  an initial postion needs to be provied to start the arithmetic
*/

const cubedSum = (array) => {
return array.map(value => value ** 3).reduce((accumulativeSum, currentValue) => accumulativeSum + currentValue, 0);
}


/*
 PASS  ./code-challenges.test.js
  allAbout
    ✓ take an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
  remainderOf3
    ✓ take in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
  cubedSum
    ✓ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)
*/