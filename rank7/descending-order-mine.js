/* https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript */

function descendingOrder(n){
    return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
}

console.log(descendingOrder(111));
console.log(descendingOrder(1021));
console.log(descendingOrder(123456789));
console.log(descendingOrder(15));
console.log(descendingOrder(1));
console.log(descendingOrder(0));

/*
    Note that it is a must to first convert the number to a string in order to use the split method to convert it to an array.
*/