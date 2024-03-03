// EXAMPLE 1 - Check if letter in String is Uppercase or Lowercase

const letter = 'A';

// ✅ Check if a letter is uppercase
if (letter.toUpperCase() === letter) {
  // 👇️ this runs
  console.log('✅ letter is uppercase');
} else {
  console.log('⛔️ letter is lowercase');
}

// // ---------------------------------------

// // ✅ Check if a letter is lowercase

// const letter2 = 'b';

// if (letter2.toLowerCase() === letter2) {
//   // 👇️ this runs
//   console.log('The letter is lowercase');
// } else {
//   console.log('The letter is uppercase');
// }

// ------------------------------------------------------------------

// // EXAMPLE 2 - isUpperCase reusable function

// function isUpperCase(string) {
//   return string.toUpperCase() === string;
// }

// console.log(isUpperCase('ABC')); // 👉️ true
// console.log(isUpperCase('A')); // 👉️ true
// console.log(isUpperCase('b')); // 👉️ false
// console.log(isUpperCase('Ab')); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - isLowerCase reusable function

// function isLowerCase(string) {
//   return string.toLowerCase() === string;
// }

// console.log(isLowerCase('ABC')); // 👉️ false
// console.log(isLowerCase('A')); // 👉️ false
// console.log(isLowerCase('b')); // 👉️ true
// console.log(isLowerCase('Ab')); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 4 - Dealing with digits and punctuation

// const letter = '?';

// if (
//   letter.toUpperCase() === letter &&
//   letter !== letter.toLowerCase()
// ) {
//   console.log('✅ letter is uppercase');
// } else {
//   // 👉️ this runs
//   console.log('⛔️ letter is lowercase');
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Defining a reusable function

// function isUpperCase(letter) {
//   if (
//     letter.toUpperCase() === letter &&
//     letter !== letter.toLowerCase()
//   ) {
//     console.log('✅ letter is uppercase');
//     return true;
//   }

//   console.log('⛔️ letter is lowercase');
//   return false;
// }

// const str = 'BObby';

// console.log(isUpperCase(str[0])); // 👉️ true
// console.log(isUpperCase(str[1])); // 👉️ true
// console.log(isUpperCase(str[2])); // 👉️ false
// console.log(isUpperCase(str)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 6 - updated isLowerCase() reusable function

// function isLowerCase(letter) {
//   if (
//     letter.toLowerCase() === letter &&
//     letter !== letter.toUpperCase()
//   ) {
//     return true;
//   }

//   return false;
// }

// const str = 'BObby';

// console.log(isLowerCase(str[0])); // 👉️ false
// console.log(isLowerCase(str[1])); // 👉️ false
// console.log(isLowerCase(str[2])); // 👉️ true
// console.log(isLowerCase(str)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 7 - Check if letter in String is Uppercase or Lowercase using RegExp.test()

// function isUpperCase(string) {
//   return /^[A-Z]+$/.test(string);
// }

// console.log(isUpperCase('')); // 👉️ false
// console.log(isUpperCase('A')); // 👉️ true
// console.log(isUpperCase('b')); // 👉️ false
// console.log(isUpperCase('Ab')); // 👉️ false
// console.log(isUpperCase('ABC')); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 8 - Checking for lowercase with RegExp.test()

// function isLowerCase(string) {
//   return /^[a-z]+$/.test(string);
// }

// console.log(isLowerCase('')); // 👉️ false
// console.log(isLowerCase('A')); // 👉️ false
// console.log(isLowerCase('b')); // 👉️ true
// console.log(isLowerCase('Ab')); // 👉️ false
// console.log(isLowerCase('ABC')); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 9 - Check if the First Letter of a String is Uppercase in JavaScript

// function firstIsUppercase(str) {
//   if (str.length === 0) {
//     return false;
//   }

//   return str.charAt(0).toUpperCase() === str.charAt(0);
// }

// console.log(firstIsUppercase('Hello')); // 👉️ true
// console.log(firstIsUppercase('world')); // 👉️ false
// console.log(firstIsUppercase('')); // 👉️ false

// if (firstIsUppercase('Hello')) {
//   console.log('✅ First letter is uppercase');
// } else {
//   console.log('⛔️ First letter is NOT uppercase');
// }

// ------------------------------------------------------------------

// // EXAMPLE 10 -  Capitalize the first letter of a string

// function capitalizeFirst(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(capitalizeFirst('apple')); // 👉️ Apple
// console.log(capitalizeFirst('one two')); // 👉️ One two
// console.log(capitalizeFirst('')); // 👉️ ''

// ------------------------------------------------------------------

// // EXAMPLE 11 - Check if the first letter of a string is uppercase using RegExp.test()

// function firstIsUppercase(str) {
//   return /[A-Z]/.test(str.charAt(0));
// }

// console.log(firstIsUppercase('Hello')); // 👉️ true
// console.log(firstIsUppercase('world')); // 👉️ false
// console.log(firstIsUppercase('')); // 👉️ false
