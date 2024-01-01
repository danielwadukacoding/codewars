var bowlingPins = a => {
    var i = n => a.includes(n) ? ' ' : 'I'
    return `${i(7)} ${i(8)} ${i(9)} ${i(10)}\n ${i(4)} ${i(5)} ${i(6)} \n  ${i(2)} ${i(3)}  \n   ${i(1)}   `
}

console.log(bowlingPins([3, 5, 9]));
console.log(bowlingPins([1, 2, 10]));