


//   program 1

// 3.  write a program that inputs marks of three subjects.if the average of marks is more than 80,it displays
// message "you are above standard, Admission Granted!". 
// show in console
// var input1 = parseInt(prompt("Enter Marks Subject 1 :"));
// var input2 = parseInt(prompt("Enter Marks Subject 2 :"));
// var input3 = parseInt(prompt("Enter Marks Subject 3 :"));
// var result = (input1 + input2 + input3) / 3;

// console.log("Subject 1 marks is :", input1);
// console.log("Subject 2 marks is :", input2);
// console.log("Subject 3 marks is :", input3);
// console.log("Average Subject is :", result);

// if (result >= 80) {
//     console.log("you are above standard, Admission Granted!")
// } else {
//     console.log("you are fail")

// }
// show in browser
// var subject1 = parseInt(prompt("Enter Marks Subject 1 :"));
// var subject2 = parseInt(prompt("Enter Marks Subject 2 :"));
// var subject3 = parseInt(prompt("Enter Marks Subject 3 :"));  
//  var result = ((subject1 + subject2 + subject3) / 3).toFixed(2);

// document.getElementById("demo1").innerHTML= `Marks are Subject 1 is: ${subject1}</br> Marks are Subject 2 is:
// ${subject2}<br> Marks are Subject 3 is: ${subject3}`;

// document.getElementById("demo2").innerHTML= `averge is : ${result} %`;

// if (result >= 80) {

//      document.getElementById("demo3").innerHTML= `you are above standard, Admission Granted!`;
// }else{
//      document.getElementById("demo4").innerHTML= `you are fail !`;
// };

// programe 2

//  1.  write a javascript program that gets temperature from user in celsius and convert it into Fahrenheit using the
//  formula F = 9/5 * C + 32, alert the output.

//   var celsius = prompt("Enter a celsius value: ");
//   var fahrenheit = (9/5 * celsius) + 32
//   var result = fahrenheit ;
//   console.log("Fahrenheight :",result)



// programe 3

// 4. write a javascript program that inputs a number from the user and check whether it is prime number or not.
// Assignment Requirement: 
// var number = prompt("enter a number");
// var num =  parseInt(number);

//   if ( num % 2 == 0 ) {
//         console.log("number is even")
//    }
// else{
//       console.log("number is odd")
//   }



//   programe 4

// 2.  write a javascript program that gets person height from user in inches and convert it into centimeters using
//     the formula heighInCentimeters = 2.54 * height, console the output. 


// var height = prompt("enter height");
// var centimeters = 2.54 * parseInt(height);
// var result = centimeters;
// console.log("Result is",result)




// programe 5
// let num =5;

// let output = 0;

// for (let i = 0; i < num / 2 ; i++) {
//   output = (output + 2);
//   console.log("output in loop", output)
// }
// console.log(output)
// if(output - num == 0){
//   console.log("number is even")
// }
// else{
//   console.log("number is odd")
// }

// programe 6
// var num = prompt("enter number for the table");
// for (j = 1; j <= 10; j++){
//      document.write(num + "*" + j + "=" + num * j + "<br>");

// }



// programe 7
// var num1 = parseInt(prompt("Enter Number 1"));
// var num2 = parseInt(prompt("Enter Number 2"));
// var num3 = parseInt(prompt("Enter Number 3"));
// var output = num1 + num2 + num3;
// document.write("number 1 is :", num1 + "<br />")
// document.write("number 2 is :", num2 + "<br />")
// document.write("number 3 is :", num3 + "<br />")
// document.write("total sum is :", output)

// programe 8

// var rows = prompt("How many rows for your multiplication table?");
// var cols = prompt("How many columns for your multiplication table?");
// if(rows == "" || rows == null)
//           rows = 10;
// if(cols== "" || cols== null)
//           cols = 10;
// createTable(rows, cols);
// function createTable(rows, cols)
// {
//   var j=1;
//   var output = "<table border='1' width='50%' cellspacing='0'cellpadding='20'>";
//   for(i=1;i<=rows;i++)
//   {
//      output = output + "<tr>";
//     while(j<=cols)
//     {
//           output = output + "<td>" + i*j + "</td>";
//            j = j+1;
//          }
//           output = output + "</tr>";
//           j = 1;
// }
// output = output + "</table>";
// document.write(output);
// }


// var userName = prompt('Enter Your Name');
// if (userName == "Adnan") {
//     alert('welcom to Adnan')
// } else {
//     alert('Name is not Adnan')
// }

// Get all the keys from document

// window.onload = function () {
// 	var buttons = document.getElementsByTagName('span'),
// 		result = document.querySelectorAll('.result p')[0],
// 		clear = document.getElementsByClassName('clear')[0];

// 	for (var i = 0; i < buttons.length; i++) {
// 	  if (buttons[i].innerHTML === '=') {
// 		buttons[i].addEventListener("click", calculate(i));
// 	  } else {
// 		buttons[i].addEventListener("click", addValue(i));
// 	  }
// 	}

// 	clear.onclick = function () {
// 	  result.innerHTML = '';
// 	};  

// 	function addValue(i) {
// 	  return function () {

// 		  result.innerHTML += buttons[i].innerHTML;

// 	  };
// 	}

// 	function calculate(i) {
// 	  return function () {
// 			  var final_res = result.innerHTML;


// 		result.innerHTML = eval(final_res);
// 	  };
// 	}
//   };

//        programe 10
// write a java script programe to get user section and alert ection timing

// var userSection = prompt('Enter Your Section')
// switch (userSection) {
//     case "A": {
//         alert('Your clas timing is 5pm to 7pm')
//         break;
//     }
//     case "B": {
//         alert('Your clas timing is 7pm to 9pm')
//         break;
//     }
//     case "C": {
//         alert('Your clas timing is 9pm to 11pm')
//         break;
//     }
//     case "D": {
//         alert('Your clas timing is 11pm to 1pm')
//         break;
//     }
//     default:
//         alert('You are not enroll')
//         break;
// }
// function onClickHandler() {
//        var userName = document.getElementById("userName").value;
//        var output = `Welcom to ${userName}!`
//        document.getElementById("output").innerHTML= output;
//    }

// calculater

// function onClickHandler(num) {
//        var output = document.getElementById("output").value;
//        document.getElementById("output").value = output + num
//     }

// function allClear() {
//        document.getElementById("output").value = "";
//     }

// function onSubmitHandler() {
//     var userId = document.getElementById("userid").value;
//     var password = document.getElementById("password").value;
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var option = document.getElementById("select").value;
//     var zipCode = document.getElementById("zip").value;
//     var output = ""
//     if (userId.length < 5 || userId.length > 12) {
//        output = output + "<li>User Id! Required and must be of length 5 to 12.<li>"
//     }
//     if (password.length < 7 || password.length > 12) {
//        output = output + "<li>Password! Required and must be of length 7 to 12.<li>"
//     }
//     var letters = /^[A-Za-z]+$/;
//     if (name.length != letters) {
//        output = output + "<li>Name! Required and alphabates only.<li>"
//     }
//     if (email.indexOf("@") == -1) {
//        output = output + "<li>please add valid email<li>"  
//     }
//     //var  numbers = /^[0-9]+$/;
//     //var zipCode= numbers;
//     if (zipCode == /^[A-Za-z]+$/ ) {
//        output = output + "<li>please add number only<li>"    
//     }
//     if (option.indexOf(" ") != -1) {
//        output = output + "<li>please select a country<li>"   
//     }
//     document.getElementById("errorList").innerHTML = output;
//  }

// //Round method
// var num = 23.445667;
// var round = Math.round(num);
// console.log("Round is",round);

// //Ceil method
// var ceil = Math.ceil(num);
// console.log(" Ceil is",ceil);

// //Floor method
// var floor = Math.floor(num);
// console.log("Floor is",floor);

// // Random number method
// var randomNumber = Math.random();
// console.log("Random Numer is",randomNumber);

//  randomNumber = (randomNumber * 10)
//  console.log("Random num * 10",randomNumber);
//  randomNumber = Math.ceil(randomNumber)
//  console.log("random num with ciel",randomNumber);


//  //ToFixed method
//  var number = 5.3456778;
//  console.log("without fixed",number);
//  console.log("to fixed is...",number.toFixed(1));

// show date/moments in js

// var currentDate = new Date();
// //alert(currentDate)
// var theDay= currentDate.getDay() ;
// console.log(theDay);
// //show current user day
// var days= ["sun","mon","tues","wed","thu","fri","sat"]
// console.log("currunt day custom", days[theDay]);
// //show current user month
// var theMont=currentDate.getMonth();
// var month=["jan","feb","march","april","may","jun","july","agust","sep","oct","nov","dec"];
// console.log("current month custom is",month[theMont]);
