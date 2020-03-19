// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};
 
// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
//function declaration
function add(n){
  return n + 1;
}


//function expression
let add = function(n){
  return n + 1;
}

//arrow function
let add = n => n+1;

//arrow function with curly braces
let add = n=> {
  return n+1;
}
 
//function invocation
add(22)

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
//function declaration
function sub(n){
  return n - 1;
}


//function expression
let sub = function(n){
  return n - 1;
}

//arrow function
let sub = n => n - 1;

//arrow function with curly braces
let sub = n=> {
  return n - 1;
}
 
//function invocation
sub(22)

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
//function declaration 
function add(x,y){
  let sum = x+y;
  return sum;
}

//function expression
let add = function(x,y){
  let sum = x+y;
  return sum;
} 

//arrow function with curly braces
let add = (x,y) =>{
   return x + y;
}
//function invocation
add(4,5);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
//function declaration 
function sub(x,y){
  return x - y;
}

//function expression 
let sub = function(x,y){
  return x - y;
}

//arrow function with curly braces
let sub = (x,y) => {
  return x - y;
}

//function invocation 
sub(4,5);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 //funtion declaration
 function multiplication(x,y){
   return x * y;
 }
 

 //function expression
 let multiplication = function(x,y){
   return x * y;
 }
 
 //arrow function with out curly braces
let multiplication = (x,y) => {
  return x * y;
}


//function invocation
multiplication(5,6);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

 //function declaration 
 function division(x,y){
   return x / y;
 }

 //function expression 
  let division = function(x,y){
    return x / y;
  }

  //arrow function with curly braces

  let division = (x,y) => {
    return x/y;
  }

  // function invocation 
  division(9,3);
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
//function declaration 
function squared(x){
  return x * x;
}

//function expression
let squared = function(x){
  return x * x;
}

//arrow function 
let squared = x => x * x;

// arrow function with curly braces
let squared = x => {
  return x * x;
}

// function invocation
 squared(9);
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
