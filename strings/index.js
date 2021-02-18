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

/slice method
var char = "world hello world";
var sliceMethod = char.slice(0, 2);
console.log("sliceMethod", sliceMethod);
console.log("sliceMethod", sliceMethod.toUpperCase());

//indexOf method
var indexOfMethod = char.indexOf("d");
console.log("indexOfMethod", indexOfMethod);

var indexOfMethod = char.lastIndexOf("d");
console.log("lastIndexOfMethod", indexOfMethod);

var indexOfMethod = char.indexOf("t");
console.log("indexOfMethod if character not exit it return >", indexOfMethod);

//charAt method
var charAt = char.charAt(5);
console.log("char At method", charAt);

//replace method
var replace = char.replace("world", "hello");
console.log("local replace", replace);

var replace = char.replace(/world/g, "hello");
console.log("global replace", replace);


var someString = prompt("Enter user name").toLocaleLowerCase();
var match = someString.match("adnan");
var match2 = someString.match("ali");


if (match) {
  alert(`welcome ${someString.toUpperCase()} to this page`);
} else if(match2) {
    alert(`welcome ${someString.toUpperCase()} to this page`);
}
else {
  alert("enter valid user name");
}

//check type method

var char =parseInt(prompt("enter character"));
console.log("check type",typeof(char));

var num=1234;
var result1=num+1;
console.log("num",result1);
var convertString=num.toString();
var result2= convertString+1;
console.log("convertString",result2);