
function table() {
//var number = prompt("Enter number for the table")
var input = document.getElementById("input").value;
var i;
for (i = 1; i <=10 ; i++) {
   // var number = 2 ;
    var result = (input + "*" + i  + "=" + input * i +"<br>");

    document.getElementById("showTable").innerHTML = result;
    
}
}

for (let i = 1; i <=10 ; i++) {
    var number = 2 ;
    console.log(number + "*" + i  + "=" + number * i);
}
