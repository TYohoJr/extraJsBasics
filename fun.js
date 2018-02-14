//write a function that accepts another function as an argument, and call that argument. 
function two() {
    return "test";
}

function one(wut) {
    console.log(wut());
}

one(two);
