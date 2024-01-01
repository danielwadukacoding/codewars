/* https://www.codewars.com/kata/585cf93f6ad5e0d9bf000010/train/javascript */
/* This was my first attempt that gave the correct answer. However, the code wasn't well optimzed. I optmized it in the 'bowling-pins-mine.js'. Therefore, don't even depend so much on it!*/

function bowlingPins(arr){
    let part1 = [7, ' ', 8, ' ', 9, ' ', 10];
    let part2 = [' ', 4, ' ', 5, ' ', 6, ' ',];
    let part3 = [' ', ' ', 2, ' ', 3, ' ',' '];
    let part4 = [' ', ' ', ' ', 1, ' ', ' ', ' '];

    part1 = part1.map(x => {
        return arr.includes(x) ? ' ' : (x === ' ' ? ' ' : 'I');
    }).join('');

    part2 = part2.map(x => {
        return arr.includes(x) ? ' ' : (x === ' ' ? ' ' : 'I');
    }).join('');

    part3 = part3.map(x => {
        return arr.includes(x) ? ' ' : (x === ' ' ? ' ' : 'I');
    }).join('');

    part4 = part4.map(x => {
        return arr.includes(x) ? ' ' : (x === ' ' ? ' ' : 'I');
    }).join('');

    return `${part1}\n${part2}\n${part3}\n${part4}`;
}

console.log(bowlingPins([3, 5, 9]));
console.log(bowlingPins([1, 2, 10]));