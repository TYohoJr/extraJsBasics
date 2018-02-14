//write a function to reverse a given string.

var testString = "reverse me"

function reverseStr(string){
    var newString = "";
    for(var i = string.length; i >= 0; i--){
        newString += string.charAt(i);
    }
    return newString;
}

console.log(reverseStr(testString));
