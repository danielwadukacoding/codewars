/* danielwadukacoding@gmail.com */
/* https://www.codewars.com/kata/514aa0dc21607ae236000017/train/javascript */

/* Here, the concept of closures is even being used deeply. The outer function is called first and executes but the inner fucntion runs later but will still remember the "name" parameter from the parent function scope. This is possible because of closures. */

function greet(name){
    return () => {
        return "Hello, " + name + '!';
    };
}

/* First executing the outer function */
var greet_abe = greet('Abe');
var greet_ben = greet('Ben');

/* Then executing the inner anonymous (arow) function that returns the actual greeting message*/
console.log(greet_abe());
console.log(greet_ben());