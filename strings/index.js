// var cities ="lahore"
// var copyChar=cities.slice(0,1);
// console.log("city",copyChar);
// var otherChar=cities.slice(1);
// console.log("otherChar",otherChar);
// copyChar = copyChar.toUpperCase();
// otherChar=otherChar.toLocaleLowerCase();
// console.log("new charater",copyChar+otherChar);

//var text = "World War II";
// for (let i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 12 === "World War II")) {
//     text = text.slice(0, i) + "the secound world war" + text.slice(i + 12);
//     console.log(text)
//   }
// }
// console.log(text);

// var text = "World War II";
// var firstChar =text.indexOf("World War II");
// //console.log("indexOf",firstChar);
// if (firstChar !== -1) {
//     text = text.slice(0, firstChar) + "the secound world war" + text.slice(firstChar + 12);
//     console.log(text);
// }

var text = "to be or not or be";

var findIndex = text.indexOf("n");
console.log("find", findIndex);

var localReplace = text.replace("be", "go");
console.log("localReplace ", localReplace);

var globalReplace = text.replace(/be/g, "go");
console.log("globalReplace", globalReplace);


var number ="24";
console.log("number",number+1);
var newNum = Number(number)
console.log("newNum",newNum+1);

var num = 1.543454;
console.log("num",num);
var newNumber = num.toFixed();
console.log("newNumber",newNumber);
var newNumber = num.toFixed(4);
console.log("newNumber",newNumber);
