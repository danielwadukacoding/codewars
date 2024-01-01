/* https://www.codewars.com/kata/5714eb80e1bf814e53000c06 */
/* https://www.codewars.com/kata/5714eb80e1bf814e53000c06/train/javascript */

function fisHex(name){
    return (name.match(/[a-f]/ig) || []).reduce((s, c) => s ^ parseInt(c, 16), 0);
}

console.log(fisHex("honey toads"));

/*
    Note that this solution doesn't need to use an object showing the base ten values of the hexadecimal values, 'a', 'b', 'c', 'd', 'e', and 'f' like the one I used. They are instead using a 'parseInt()' method. They supply 2 parameters: the string to be converted to an integer, and the radix (the base in mathematical numeral system). 
    
    Examples parseInt('a', 16) = 10, parseInt('e', 16) = 14, parseInt('0111', 2) = 7.

    And also note that they are doing parseInt on only 'c' in the reduce function and not on 's'. This is because according to the way the reduce function works, it is 'c' that represents the current value. The 's' represents the accumulated value and so doing a parseInt(s, 16) would give wrong results.

    arr.reduce((accumulator, currentValue) => accumulator ^ currentValue, initialValue);

    Since out initial value is a zero, so the accumulator starts with a zero and as the XOR operation proceeds, it keeps the current accumulated value. So it is only the current value that needs to be parsed to an int according to base 16 so that it can be operated with the XOR.
*/