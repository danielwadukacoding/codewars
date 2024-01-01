/* https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript */

function XO(str) {
   let exes = str.match(/x/gi);
   let ohs = str.match(/o/gi);

   return (exes && exes.length) === (ohs && ohs.length);
}

console.log(XO('xo')); //expexted -> true
console.log(XO('xxOo')); //expexted -> true
console.log(XO('xxxm')); //expexted -> false
console.log(XO('Oo')); //expexted -> false
console.log(XO('ooom')); //expexted -> false

/*
    My solution uses a logical OR, || but this solution uses a logical AND, &&. Both are correct solutions. And they are both solving the same problem of trying to avoid the scenario where we call the length function on null. In this case, we first assess 'exes' and 'ohs' to ensure that they are "TRUE" i.e. not null before we can proceed to ecaluate the lengths of their respective arrays.

    According to the way the logical AND works, if exes is not TRUE pr null, then the exes.length statement would even be evaluated. The same with 'ohs'. So this removes the possibility of ever trying to evaluate the length of null which would yield an error.

    If the left hand side is TRUE, then the right hand side will be returned as the result of the expression which is the length of the array denotaing the number of matches. i.e. exes && exes.length will return exes.length and ohs && ohs.length will return ohs.length.

*/