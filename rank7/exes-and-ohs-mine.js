/* https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript */

function XO(str) {
    let countExes = (str.match(/x/gi) || []).length;
    let countOhs = (str.match(/o/gi) || []).length;
  
    return countExes === countOhs;
}

console.log(XO('xo')); //expexted -> true
console.log(XO('xxOo')); //expexted -> true
console.log(XO('xxxm')); //expexted -> false
console.log(XO('Oo')); //expexted -> false
console.log(XO('ooom')); //expexted -> false

/*
    Note that the .match method returns an array of the search character if any e.g. "agtahA".match(/a/gi) will return ['a', 'a', 'A']. Note that it is case insenstive as we used /gi. You can remove the 'i' if you want it to be case sensitive. Then we count the number of elements present in the array with the .length array function.

    However, if there are no matches, we shall get a null which shall then give us an error when trying to access the .length method on it since that method applies to arrays and string and not null. To solve this, we use the logical OR, '||' which will return the array of the searched for characters if any or an empty string in case there are no matches. When an empty array is returned, the .length method on it will return a zero which is the expected behavior than the error in case it was a null.


*/