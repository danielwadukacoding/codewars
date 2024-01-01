/* https://www.codewars.com/kata/585cf93f6ad5e0d9bf000010/train/javascript */

/* 
    This is the optimized code of the 'bowling-pins-mine-unoptimized.js' code.
*/

function bowlingPins(arr){
    let arrRep = [7, ' ', 8, ' ', 9, ' ', 10, '\n', ' ', 4, ' ', 5, ' ', 6, ' ', '\n', ' ', ' ', 2, ' ', 3, ' ', ' ', '\n', ' ', ' ', ' ', 1, ' ', ' ', ' '];

    return arrRep.map(x => {
        return arr.includes(x) ? ' ' : (x !== ' ' && x !== '\n' ? 'I' : x);
    }).join('');
}

console.log(bowlingPins([3, 5, 9]));
console.log(bowlingPins([1, 2, 10]));