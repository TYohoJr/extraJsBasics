//Given a string, write a function that returns the number of time the letter "b", "c" or "u" appear in that string.
function strTest(myStr) {
    var counter = 0;
    for(var i = 0; i < myStr.length; i++) {
        if(myStr[i] == "b" || myStr[i] == "c" || myStr[i] == "u") {
            counter++;
        }
    }
    return counter;
}

console.log(strTest("qweqbbbuceq"))
