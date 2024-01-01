/* https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript */

function filter_list(l) {
    return l.filter(v => typeof v == 'number');
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));

/*
    According to this solution, since we have only one parameter to the filter method, we don't need to inclose it in brackets like how I did in my solution. I did .filter((item) ...) but could as well just do .filter(item ...)  Also, typeof v not necessarily typeof(v) as I did.
*/