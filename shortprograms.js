


                                 //   program 1

// 3.  write a program that inputs marks of three subjects.if the average of marks is more than 80,it displays
// message "you are above standard, Admission Granted!". 
               //show in console
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

//}
                    //show in browser
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

                                       //programe 2

  //  1.  write a javascript program that gets temperature from user in celsius and convert it into Fahrenheit using the
   //  formula F = 9/5 * C + 32, alert the output.

            //   var celsius = prompt("Enter a celsius value: ");
            //   var fahrenheit = (9/5 * celsius) + 32
            //   var result = fahrenheit ;
            //   console.log("Fahrenheight :",result)
        


                                        // programe 3

//4. write a javascript program that inputs a number from the user and check whether it is prime number or not.
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




               //programe 5
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

          //programe 6
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

                  //programe 8

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

// Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
		// If clear key is pressed, erase everything
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		// If eval key is pressed, calculate and display the result
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			// Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		
		// Basic functionality of the calculator is complete. But there are some problems like 
		// 1. No two operators should be added consecutively.
		// 2. The equation shouldn't start from an operator except minus
		// 3. not more than 1 decimal should be there in a number
		
		// We'll fix these issues using some simple checks
		
		// indexOf works only in IE9+
		else if(operators.indexOf(btnVal) > -1) {
			// Operator is clicked
			// Get the last character from the equation
			var lastChar = inputVal[inputVal.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			// Allow minus if the string is empty
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		// Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		// if any other key is pressed, just append it
		else {
			input.innerHTML += btnVal;
		}
		
		// prevent page jumps
		e.preventDefault();
	} 
}




