
/*document.write('<b><i>hello world</i></b><br>');
document.write('hello world');*/

/*var a='adnan_guru';
var b=100;

document.write(a);
document.write(b);*/


/*document.write("<table border='1px'>");
var num = prompt("enter number for the table");

  document.write("Table <br>");
  for (j = 1; j <= 20; j++)
  document.write(num + "*" + j + "=" + num * j + "<br>");
document.write("</table>");*/



 /*function displayDate() {
  document.getElementById("demo").innerHTML = Date();
  
}*/



/*var date=1;
 var date=prompt("enter the date");
switch (date) {
  case 1:
    alert("today is satureday");
    
    break;
    case 2:
      alert("today is sunday");
      break;
      case 3:
        alert("today is monday");
        
       break;
      case 4:
      alert("today is tuesday");
       break;
      case 5:
       alert("today is wednesday");
       break;
       case 6:
        alert("today is thursday");
        
        break;
        case 7:
          alert("today is fridayday");
          break;        
          case 8:
            alert("today is satureday");
            
            break;
            case 9:
              alert("today is sunayday");
              break;    
  default:
    
   alert("enter the valid date");
}*/


/*var a=confirm("Do you like my website");
if(a){
    alert("thank you");
}else{
 alert("sorry");
}*/

//[function]

/*var a = prompt("enter your name");
document.write(a)*/

/*function hello() {

  document.write('Hello Every body');
}
document.write("<br>")
function adnan() {

  document.write('Hello world');
}
hello();
adnan();

//[while loop]
/*var a=1;
document.write("<ul>");
while (a <=10) {
  document.write("<li>" +a+  ") adnan_guru </li>");
  a= a +1;
  document.write("</ul>");
}*/

//[do while loop]
  /*var a = 1;
    do{
      document.write(a+")adnan_guru<br>")
      a++;
    }while(a <= 10)*/
    
    //[for loop]
    /*for(a=1; a<=10; a++){
      document.write(a+")adnan_guru <br>");
    }*/
      
    //[break/continue statement]

/*for (a =1 ; a <=10; a++) {
  if(a ==3){
    document.write("hey:" + a + "<br>");
    continue;
  }

  document.write("number:" + a + "<br>");  
  
}*/

/*var enterdate;
enterdate = prompt("Enter the date to display the day");
switch (enterdate)
{
    case "1":
        alert("Today is Satureday");
        break;
    case "2":
        alert(" Today is Sunday");
        break;
    case "3":
        alert("Today is Monday");
        break;
    case "4":
        alert("Today is Tuesday");
        break;
         default:
        alert("Enter the valid date");
}*/

//even or odd num cheak
/*for(var a = 1; a <=10; a++){
  if(a % 2 != 0){
    var a =prompt("enter a number")
    document.write(a + "<br>");
  }
}*/

//nested loop

/*for(var a=1; a<=100; a=a+10){
  for(var b=a; b<a+10; b++){
    document.write(b+"    ")
  }
  document.write("<br>")
}*/

//nested loop


/*for(a =1; a<=30; a++){
  for(b =1 ; b<=a;  b++){
    document.write(b +  " ")
  }
  document.write("<br>")
}*/

//array

/*var ary = [10,20,30,40,50,60,70,80,90,100];
var sum=0;
document.write("<ul>")
for(a=0; a<=9; a++){
  document.write("<li>" +ary[a] + "</li>")
  sum=sum+ary[a];
}
document.write("</ul>")
document.write("total sum is: " +sum);*/

//arry

/*var a= ["Waseem","Adnan","Waqar","Talha","Zaya"]
document.write("<h1> array</h1>")
document.write(a + "<br><h1>Sort array</h1>");
a.sort();
document.write(a + "<br><h1>reverse array</h1>");
a.reverse();
document.write(a + "<br><h1>pop</h1>");
a.pop();
document.write(a + "<br><h1>push</h1>");
a.push("usman")
document.write(a + "<br><h1>shift</h1>");
a.shift();
document.write(a + "<br><h1>unshift</h1>");
a.unshift("ferhan");
document.write(a + "<br>");*/


// var ary =new Array(3);


// for(var g= 0; g < 3; g++);{
//   ary[g]=prompt("enter the value");
// }

// document.write("<ul>")

// for(var a=0; a < 3; a++){
  
// }



          //Array Concepts
// var student = ["Adnan","Umer","Tyyab","Asif","Zahid","Faizan"];
// student [0] = "ferhan";
// console.log("output is here",student[1]);
// console.log("total arry",student);
// alert(student[0])

         //    Empty Array
// var emptyArray =[];
// console.log("Array is here", emptyArray);
// emptyArray [0]= "Adnan";
// emptyArray [1]= "zahid";
// emptyArray [2]= "ali";
// emptyArray [3]= "wajid";
// emptyArray [4]= "asif";
// console.log("Array is here" ,emptyArray);
// console.log("Array is here" ,emptyArray[1]);

//       //property for cheacking len of arr
// var checkLength= emptyArray.length;
// console.log("Length",checkLength);

    //pop and push method

    // var numArray =[1,2,3,4,5,6];
    // console.log("number array is here",numArray);
          // push > add value is last
    // numArray.push(7);
    // console.log("number array is here",numArray);
         // pop > delete value last
    // numArray.pop();
    // console.log("number array is here",numArray);

 //if we want to add a value start in array
//  var array=[4,5,6]
//  console.log("array is here",array);
//       // push > add value is first
//  array.unshift(1,2,3);
//  console.log("array is here",array);
//       // push > delete value is first
//  array.shift();
//  console.log("array is here",array);


//how to add numer in specefic place
// var numArray=[1,2,3,4,5,6];
// console.log("array is here",numArray);
// numArray.splice(4,2,7,8,9)
// console.log("array is here",numArray);

//cut a array and show another array
// var cities=["fsd","lhr","karachi","hyd"]
// console.log(cities);
// var punCities= cities.slice(0,2)
// console.log("punjab cities",punCities);
// var sindhCities =cities.slice(2,4)
// console.log("sindh citie is here",sindhCities);


























