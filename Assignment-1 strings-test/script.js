// //1. Write a js program to find length of a string.
// var fullName = "Adnan shabbir";
// var findLenth=fullName.length;
// console.log("findLenth",findLenth);

// //2. Write a js program to copy one string to another string.
// var char = " Hello Hello world";
// var char2 = "world";
// console.log("char 2 ", char2);
// var copyChar = char.slice(0, 6);
// console.log("copy char", copyChar);
// var char2 = copyChar + " " + char2;
// console.log("new char is", char2);

////3. Write a js program to concatenate two strings.
// var firsName = "Adnan";
// var lastName = "Shabbir";
// var concatenate = firsName + " " + lastName;
// console.log("concatenate >>",concatenate);

// //4. Write a js program to compare two strings.
// var char1 = prompt("enter char 1");
// var char2 = prompt("enter char 2");
// if (char1===char2) {
//     console.log("stings is matching!");
// }else{
//     console.log("stings is not matching!");
// }

// //5. Write a js program to convert lowercase string to uppercase.
// var firsName = "adnan";
// var toUpper = firsName.toLocaleUpperCase();
// console.log("toUpper >>", toUpper);

// //6. Write a js program to convert uppercase string to lowercase.
// var firsName = "ADNAN";
// var toLowerCase = firsName.toLowerCase();
// console.log("toLowerCase >>", toLowerCase);

//7. Write a js program to toggle case of each character of a string.
// var firsName = "ADNAN";
// var toLower = firsName.toLowerCase();
// console.log("toLower >>", toLower);

// //8. Write a js program to find total number of alphabets, digits or special character in a string.

// var char = "adnan123@%&";
// var matchString = char.match(/[a-z]/g);
// console.log(" matchString total is >>", matchString);
// var matchDigit = char.match(/[0-9]/g);
// console.log(" matchDigit total is >>", matchDigit);


// //9. Write a js program to count total number of vowels and consonants in a string.
// //aeiou/vowels
// var word = "fdsdffdsfaioeudsdasdaioeudasdasdaioeu"
// var vowels=word.match(/[aeiou]/g);
// console.log("vowels >>",vowels);
// console.log("vowels length >>",vowels.length);

// //10. Write a js program to count total number of words in a string.
// var char = "adnan";
// console.log("total number of words >>",char.length);

// //11. Write a js program to find reverse of a string.
// var number = "12345";
// console.log("number",number);
// var num1=number.charAt(0);
// var num2=number.charAt(1);
// var num3=number.charAt(2);
// var num4=number.charAt(3);
// var num5=number.charAt(4);
// var revers=num5+num4+num3+num2+num1
// console.log("revers>>",revers);

//12. Write a js program to check whether a string is palindrome or not.
//palindrome word example is >> Anna Civic.Kayak Level.Madam.Mom.Noon.Racecar.

//13. Write a js program to reverse order of words in a given string
// var number = "12345";
// for (let i =number.length-1; i>=0; i--) {
//   console.log("adfdsd", number[i]);
// }

// console.log("number",number);
// var num1=number.charAt(0);
// var num2=number.charAt(1);
// var num3=number.charAt(2);
// var num4=number.charAt(3);
// var num5=number.charAt(4);
// var revers=num5+num4+num3+num2+num1
// console.log("revers>>",revers);

// //14. Write a js program to find first occurrence of a character in a given string.
// var char="Muhammad Adnan";
// var firstChar=char.slice(0,1);
// console.log("firstChar is >>",firstChar);

// //15. Write a js program to find last occurrence of a character in a given string.
// var char="Muhammad Adnan";
// var lastChar=char.slice(char.length-1);
// console.log("lastChar is >>",firstChar);

// //16. Write a js program to search all occurrences of a character in given string.
// var character = "ghsdfas5434212ghfads7643*&&^&%$$#fdds"
// var findCharacter = character.match(/[a-z]/g);
// console.log(" findCharacter >>" ,findCharacter);

// //17. Write a js program to count occurrences of a character in given string.
// var character = "ghsdfas5434212ghfads7643*&&^&%$$#fdds"
// var findCharacter = character.match(/[a-z]/g);
// console.log(" findCharacter >>" ,findCharacter);
// console.log(" findCharacter length is >>" ,findCharacter.length);

//18. Write a js program to find highest frequency character in a string.

//19. Write a js program to find lowest frequency character in a string.

//20. Write a js program to count frequency of each character in a string.

// //21. Write a js program to remove first occurrence of a character from string.
// var char = prompt("enter a character");
// var removeFirst=char.slice(1,char.length)
// alert(`removeFirst>> ${removeFirst}`);

// //22. Write a js program to remove last occurrence of a character from string.
// var char=prompt("enter charcter")
// var removeLast=char.slice(0,char.length-1);
// console.log("removeLast char >>",removeLast);

// //23. Write a js program to remove all occurrences of a character from string.
// var char = "adnan"
// var char=prompt("enter charcter")
// var removeLast=char.slice(char.length);
// console.log("removeLast char >>",removeLast);

//24. Write a js program to remove all repeated characters from a given string.

// //25. Write a js program to replace first occurrence of a character with another in a string.
// var char = "323456789"
// var firstChar=char.slice(1,char.length)
//  replace = "1"
// console.log("replaceFirstChar>>",replace+firstChar);

// //26. Write a js program to replace last occurrence of a character with another in a string.
// var char = "1234567899"
// var firstChar=char.slice(0,char.length-1)
//  replace = "10"
// console.log("replaceFirstChar>>",firstChar+replace);

// //27. Write a js program to replace all occurrences of a character with another in a string.
// var char = "adnan"
// console.log("first char >>", char);
// var char ="ADNAN"
//  console.log("secound char >>",char);

// //28. Write a js program to find first occurrence of a word in a given string.
// var char = prompt("enter a character")
// var firstChar = char.slice(0,1);
// alert(`first char is >> ${firstChar}`)

// //29. Write a js program to find last occurrence of a word in a given string.
// var char = prompt("enter a character")
// var lastChar = char.slice(char.length-1);
// alert(`last char is >> ${lastChar}`)

// //30. Write a js program to search all occurrences of a word in given string.
// var mixCharacter="34324adnan6765usman%$%$#,ali34323"
// var find=mixCharacter.match(/[a-z]/g);
// console.log("find word",find);

// //31. Write a js program to count occurrences of a word in a given string.
// var char="MuhammadAdnan"
// console.log("total count word is >>",char.length);

// //32. Write a js program to remove first occurrence of a word from string.
// var char = "adnan"
// console.log("char",char);
// var removeFirst=char.slice(1,char.length);
// console.log("removeLast",removeFirst);

// //33. Write a js program to remove last occurrence of a word in given string.
// var char = "adnan"
// console.log("char",char);
// var removeLast=char.slice(0,char.length-1);
// console.log("removeLast",removeLast);

// //34. Write a js program to remove all occurrence of a word in given string.
// var mixCharacter = "1234a5435dnan5678ali9erew10"
// console.log("mixcharacter",mixCharacter);
// var mixCharacterFilter=mixCharacter.match(/[a-z]/g)
// console.log("mixCharacter filter word>>",mixCharacterFilter);

//35. Write a js program to trim leading white space characters from given string.
//same as quetion 36

// //36. Write a js program to trim trailing white space characters from given string.
// var char = "'      Adnan'"
// console.log("char >>",char);
// var trimBoth = char.replace(/ /g , "")
// console.log("trimBoth >>",trimBoth);

// //37. Write a js program to trim both leading and trailing white space characters from given string.
// var char= " '  adnan  ' "
// console.log("char >>",char);
// var trimBoth = char.replace(/ /g , "")
// console.log("trimBoth >>",trimBoth);

// //38. Write a js program to remove all extra blank spaces from given string.
// var char = "Mu ha mm ad  -A  d na n"
// console.log("char",char);
// var removeSpaces= char.replace(/ /g,"")
// console.log("removeSpaces",removeSpaces);
