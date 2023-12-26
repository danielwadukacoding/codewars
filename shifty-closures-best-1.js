/* danielwadukacoding@gmail.com */
/* https://www.codewars.com/kata/514aa0dc21607ae236000017/train/javascript */

/* Instead of declaring local variables in each function, declare one global function that each function can then override or customize */

var myname;

var greet_abe = function() {  
    myname = 'Abe';  
    return "Hello, " + myname + '!';
};

var greet_ben = function(){
    myname = 'Ben';
    return "Hello, " + myname + '!';
};

console.log(greet_abe());
console.log(greet_ben());