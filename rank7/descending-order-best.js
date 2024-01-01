/* https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript */

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''));
}

console.log(descendingOrder(111));
console.log(descendingOrder(1021));
console.log(descendingOrder(123456789));
console.log(descendingOrder(15));
console.log(descendingOrder(1));
console.log(descendingOrder(0));

/*
    The person used String(n) instead of what I used n..toString() to convert the number to a string. Also, instead of using the sort to do the descending, they rather did the normal sort but instead applied the reverse method to implement the descending functionality.

    Both my solution and this one are all great
*/