//research and use the reduce() array method to compute the sum of all of the elements in the array
var array = [222, 4, 8, -4]

function getSum(total, value) {
    return total + value;
}

console.log(array.reduce(getSum));