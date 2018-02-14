//Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7. The function should return true or false (a boolean).

var testNum = 21;

function threeSevenTest(num) {
    var result = false;
    if((num > 0) && (num % 3 == 0) && (num % 7 == 0)){
        result = true;
    }
    return result;
}

console.log(threeSevenTest(testNum));
