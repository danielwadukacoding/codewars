/* https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript */

/* Note that this is the standard way of writing function constructors. So we remove the return statement since the function should be able to do that for us (returning the this object as long as there is not return statment) */

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}

const name1 = new NameMe('Daniel', 'Waduka');
console.log(name1.firstName);
console.log(name1.lastName);
console.log(name1.name);