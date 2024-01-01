/* https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript */

function filter_list(l) {
    return l.filter(function(v) { return typeof v == 'number'});
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));

/*
    This solution used normal functions and not arrow functions. But ever since arrow functions were introduced in ES6, most would prefer to use them in such a context
*/