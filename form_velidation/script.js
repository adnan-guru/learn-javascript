function onSubmitHandler() {
    var userId = document.getElementById("userid").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var option = document.getElementById("select").value;
    var zipCode = document.getElementById("zip").value;
    var gender = document.getElementById("gender").value;
    var language = document.getElementById("Language").value;
 
    var output = ""
    if (userId.length < 5 || userId.length > 12) {
       output = output + "<li>User Id! Required and must be of length 5 to 12.<li>"
    }
    if (password.length < 7 || password.length > 12) {
       output = output + "<li>Password! Required and must be of length 7 to 12.<li>"
    }
    if (!name.match(/^[a-zA-Z]+$/)) {
       output = output + "<li>Name! Required and alphabates only.<li>"
    }
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
       output = output + "<li>Email! Must be a valid email<li>"  
    }
    if ( !zipCode.match("^[0-9]*$") ) {
       output = output + "<li>Zip Code! please add a zip code in numbers <li>"    
    }
    if (option == "" ) {
       output = output + "<li>Country! Must select a country<li>"   
    }
    if (gender == "" ) {
       output = output + "<li>Gender is required.<li>"   
    }
    if (language == "") {
       output = output + "<li>Language is  required.<li>"   
    }
 
    document.getElementById("errorList").innerHTML = output;
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 