/* https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript */

function between(a, b) {
    let arr = [];
    
    for(let i = a; i <= b; i++){
      arr.push(i);
    }
    
    return arr;
}

console.log(between(1, 4));
console.log(between(-2, 2));