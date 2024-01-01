function test(a, b){
    let arr = [];

    for(let i = a; i <= b; i++){
        arr.push(i);
    }

    return arr;
}

console.log(test(1, 4));