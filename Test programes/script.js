// Question-01
// Write a function that takes a credit card number and only displays the last four characters.
// The rest of the card number must be replaced by ************.
// Examples
// cardHide("1234123456785678") ➞ "************5678"
// cardHide("8754456321113213") ➞ "************3213"
// cardHide("35123413355523") ➞ "**********5523"

//answer

// var cardNumber = prompt("Enter your card number")
// var card = cardNumber.slice(10, 15);
// var hideCard = "**********"
// console.log("your card number is", hideCard+card);

// Question-02
// Create a function to return the amount of potatoes there are in a string.
// Examples
// potatoes("potato") ➞ 1
// potatoes("potatopotato") ➞ 2
// potatoes("potatoapple") ➞ 1

// function potatoeos() {
//   var quantity = prompt("enter patato quantity");

//   //   var count1 = "patato";
//   //   var count2 = "patatopatato";
//   //   if (quantity === count1) {
//   //     console.log("patato quantity is 1");
//   //   } else if (quantity === count2) {
//   //     console.log("pataoes quantity is 2");
//   //   } else {
//   //     console.log("patato quantity is 1 !");
//   //   }
// }

// potatoeos();

// Question-03
// Create a function that takes a string and returns a string in which each character is repeated once.
// Examples
// doubleChar("String") ➞ "SSttrriinngg"
// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
// doubleChar("1234!_ ") ➞ "11223344!!__  "

// var character = prompt("Enter character");
// var replace =character.indexOf(1,7)
// var char1 = character.slice(0, 1);
// var char2 = character.slice(1, 2);
// var char3 = character.slice(2, 3);
// var char4 = character.slice(3, 4);
// var char5 = character.slice(4, 5);
// var char6 = character.slice(5, 6);
// var char7 = character.slice(6, 7);
// var char8 = character.slice(7, 8);
// var char9 = character.slice(8, 9);
// var char10 = character.slice(9, 10);
// var char11 = character.slice(10, 11);
// var char12 = character.slice(11, 12);
// var replace =
//   char1 +
//   char1 +
//   char2 +
//   char2 +
//   char3 +
//   char3 +
//   char4 +
//   char4 +
//   char5 +
//   char5 +
//   char6 +
//   char6 +
//   char7 +
//   char7 +
//   char8 +
//   char8 +
//   char9 +
//   char9 +
//   char10 +
//   char10 +
//   char11 +
//   char11 +
//   char12 +
//   char12;
 console.log("replace", replace);

//Question-04
//Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
//Basic Salary <= 10000 : HRA = 20%, DA = 80%
//Basic Salary <= 20000 : HRA = 25%, DA = 90%
//Basic Salary > 20000 : HRA = 30%, DA = 95%

// var salary = parseInt(prompt("Enter your salary"));
// if (salary <= 10000) {
//   console.log("HRA = 20%, DA = 80%");
// } else if (salary <= 20000) {
//   console.log("HRA = 25%, DA = 90%");
// } else if (salary > 20000) {
//   console.log("HRA = 30%, DA = 95%");
// } else {
//   console.log("Enter salary in number");
// }

//Question-05
// Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
//For first 50 units Rs. 0.50/unit
//For next 100 units Rs. 0.75/unit
//For next above 100 units Rs. 1.20/unit
//For unit above 250 Rs. 1.50/unit
//An additional surcharge of 20% is added to the bill

// var unit = parseInt(prompt("enter your electricity unit"));
// if (unit <= 50) {
//   var bill = unit * 0.5;
//   console.log(`Your electricity bill is > ${bill} rupees`);
// } else if (unit <= 100) {
//   var bill = unit * 0.75;
//   console.log(`Your electricity bill is > ${bill} rupees`);
// } else if (unit > 100 && unit <= 250) {
//   var bill = unit * 1.2;
//   console.log(`Your electricity bill is > ${bill} rupees`);
// } else if (unit > 250) {
//   var bill = unit * 1.2;
//   console.log("bill", bill);
//   var charge = (unit * 20) / 100;
//   var totalBill = bill + charge;
//   console.log(`Your electricity bill is > ${totalBill} rupees`);
// }

// Question-06
// Find the sum of all the multiples of 3 or 5 below 1000.
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these
//multiples is 23.

// for (let i = 1; i <=1000; i++) {

// if (i%3===0) {
//     console.log("whose numbers multiply by 3 >",i);

// }
// if (i%5===0) {
//     console.log("whose numbers multiply by 5 >",i);

// }
// }

// var sum = 0;
// for (var i = 1; i <= 50; i++) {
//    sum = sum + i;
// }
// alert("Sum = " + sum);

// Question-07
// Given an array, create a function that returns an object detailing how many times each element was repeated.
//Sort the object by value in descending order.

// Examples
// countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"]) ➞ { cow: 3, cat: 2, dog: 1 }
// countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0]) ➞ { 0: 6, 5: 3, 12: 2, 1: 1 }
// countRepetitions(["Infinity", "null", "Infinity", "null", "null"]) ➞ { null: 3, Infinity: 2}

// var numbers=[1,1,1,2,2,2,3,3,3,4,4,6,6,6,7,8,8,9,9,];
// for (let i = 0; i < numbers.length; i++) {
//     console.log("numbers",numbers[i]);

// }

// Question-08
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character)
//is found in the second string.
// Examples
// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4
