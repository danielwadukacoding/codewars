/* https://www.codewars.com/kata/559f3123e66a7204f000009f/train/javascript */
var ArrowFunc = function(arr) {    
    return arr.map((num) => String.fromCharCode(num)).join('');
}

console.log(ArrowFunc([84,101,115,116]));

/* Note: learn more the difference between toString() and join() */