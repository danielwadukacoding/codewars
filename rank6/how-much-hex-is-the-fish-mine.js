/* https://www.codewars.com/kata/5714eb80e1bf814e53000c06 */
/* https://www.codewars.com/kata/5714eb80e1bf814e53000c06/train/javascript */

/* NB: My solution doesn't work for some edge test cases. It is also missing some recommended functions. I have only placed it here for documentation reasons but please refer to the best solution. */

const hexSymbols = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
}

function fisHex(str){
    let y = (str.match(/[a-f]/gi) || []).map(ch => hexSymbols[ch]);
    return y.reduce((a, b) => a ^ b, 0);
}
