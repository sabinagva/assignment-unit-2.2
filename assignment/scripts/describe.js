
// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;
number++;
if (number >= 2) {
  console.log('yes');
}
*/


// 1. WRITE YOUR DESCRIPTION HERE
// we make a variable called name and set is to name Dane
// if the name is exact match to Mary we console.log 'Hi Mary!'
// if  name is not exact match to Mary
//we console.log 'How do you do?'
// our console.log value in this case will be 'How do you do?'

//CODE
/*
let name = 'Dane';
if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}
*/

// 2. WRITE YOUR DESCRIPTION HERE
// create a variable called secret dont set it to anything
// create a variable called code set it to 123
// then we check is code is 123 if it is we set secret to super and code to 246
// else we check if code is bigger than 250 if it is  we set super to duper
//else we console.log(secret)
// we end up applying the first if statement 
// if code is exact match to 123 then secret is equal to super or code is equal to 246
//if code is bigger than 250 then secret equals to duper. if any of these correct console.log secret

//CODE
/*
let secret;
let code = 123;
if(code === 123) {
  secret = 'super';
  code = code * 2;
}
if (code > 250) {
  secret = 'duper'
}
console.log(secret)
*/

// 3. WRITE YOUR DESCRIPTION HERE
// created a variable called isStudent and set it to true
// create  variable called age and set it to 34
// create a varibale called zip and set it to 55407
//if student is equal to true and zip varibale is larger than 80000 then console log You're a student on the West Coast!
//however if student is equal to false or age is smaller than 30 then console.log What are your hobbies?
//if only isStudent equal to true console log Welcome to prime
//If none is applicable then console.log How about the weather?
//our console log is 'Welcome to Prime?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;
if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}
*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;
// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 
if (number >= 2) {
  console.log('yes');
}
*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
//FIX: description states we set colorTwo and colorOne to 'purple'. However only ColorOne is set to 'purple. 
//if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';
}
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
//FIX: description states temp is higher than 39 and if time is greater or equal to  4 however code states 'or' to match the description we make this change
// if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
//FIX: description is wrong if age is greater of equal to minage then we console log 'no entry' if else we console.log 'enter'
// to have the code according to description we would need to  
if(minAge <= age) {
  console.log('enter');
}
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/