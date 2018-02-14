//write a JavaScript program that accepts an array of strings and chooses the longest one
var arrayOfStrings = ["one", "two", "asuhuqwhe", "three"]

function longStr(array) {
    var arrayResult = "";
    for(var i = 0; i < array.length; i++){
        if (array[i].length > arrayResult.length){
            arrayResult = array[i];
        }
    }
    return arrayResult;
}

console.log(longStr(arrayOfStrings));
