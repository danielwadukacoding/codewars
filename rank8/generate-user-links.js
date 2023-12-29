/* https://www.codewars.com/kata/57037ed25a7263ac35000c80 */
function generateLink(user) {
    return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}

console.log(generateLink('Daniel Waduka'));
console.log(generateLink('juukobernard'));
console.log(generateLink('%gr@kops-limted'));
console.log(generateLink('ployer(the-best%)'));

/* 

Note: Here, we use the encodeURIComponent and not the encodeURI since we are only interested in encoding the parameter i.e. part of the URI and not the entire URI. If we are to encode the entire URI, then we use the encodeURI.

For more information, read about encodeURI and encodeURIComponent 

*/