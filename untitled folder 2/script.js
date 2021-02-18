// numbers = [1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0];
// var count = {};
// console.log("count",count);
// numbers.forEach(function (num){
//   count[num] = (count[num] || 0) + 1;
// });
// console.log("numbers array >", count);

// var names=["adnan","adnan","adnan","ali",1,1,1,22,22,]
// var count={};
// names.forEach(i => {
//     count[i] = (count[i] || 0) + 1;
// });
// console.log("names array >", count);

//var number=parseInt(prompt("enter a number"))

// var dayOfTheWeek = prompt("Enter Day");
// switch (dayOfTheWeek.toLowerCase()) {
//   case "sunday":
//     console.log("wellcome");
//     break;

//   default:
//     console.log("enter valid day");
//     break;
// }

// function popUp(message) {
//   alert(message);
// }

// var email = prompt("Enter your email");
// if (email.indexOf("@") === -1) {
//   alert("enter a valid email");
// }

// //slice method
// var char = "world hello world";
// var sliceMethod = char.slice(0, 2);
// console.log("sliceMethod", sliceMethod);
// console.log("sliceMethod", sliceMethod.toUpperCase());

// //indexOf method
// var indexOfMethod = char.indexOf("d");
// console.log("indexOfMethod", indexOfMethod);

// var indexOfMethod = char.lastIndexOf("d");
// console.log("lastIndexOfMethod", indexOfMethod);

// var indexOfMethod = char.indexOf("t");
// console.log("indexOfMethod if character not exit it return >", indexOfMethod);

// //charAt method
// var charAt = char.charAt(5);
// console.log("char At method", charAt);

// //replace method
// var replace = char.replace("world", "hello");
// console.log("local replace", replace);

// var replace = char.replace(/world/g, "hello");
// console.log("global replace", replace);

// var someString = prompt("Enter user name").toLocaleLowerCase();
// var match = someString.match("adnan");
// var match2 = someString.match("ali");

// if (match) {
//   alert(`welcome ${someString.toUpperCase()} to this page`);
// } else if(match2) {
//     alert(`welcome ${someString.toUpperCase()} to this page`);
// }
// else {
//   alert("enter valid user name");
// }

// //check type method

// var char =parseInt(prompt("enter character"));
// console.log("check type",typeof(char));

// var num = 1234;
// var result1 = num + 1;
// console.log("num", result1);
// var convertString = num.toString();
// var result2 = convertString + 1;
// console.log("convertString", result2);

// function sumNumbers(a, b) {
//   var result = a + b;
//   console.log("result",result);
// }
// sumNumbers(5 , 5)

// if .5 it increase number by 1
// var num = 1.6334232;
// var numRound=Math.round(num);
// console.log("numRound",numRound);

// //if after .2323 any number it increase number by 1
// var numCeil=Math.ceil(num);
// console.log("numCeil",numCeil);

// //if .323213 any number it cannot increase number
// var floorMethod=Math.floor(num)
// console.log("floorMethod",floorMethod);

// //math random number method

// var number = Math.random();
// console.log("random number", number);
// var multiply = number * 100;
// console.log("multiply by 100 >",multiply);
// var ceilMethod=Math.ceil(multiply);
// console.log("ceilMethod",ceilMethod);


// var number = "30.5555";
// console.log("number",number);

// var convertInt=parseInt(number);
// console.log("convertInt",convertInt);

// var convertNumber=Number(number);
// console.log("convertNumber",convertNumber);

// // 30.5555 >31
// var fixed=convertNumber.toFixed();
// console.log("fixed",fixed);
// //30.55
// var fixed=convertNumber.toFixed(2);
// console.log("fixed define lenth",fixed);