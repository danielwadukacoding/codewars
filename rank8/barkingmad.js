/* https://www.codewars.com/kata/54dba07f03e88a4cec000caf/train/javascript */
function Dog (breed) {
    this.breed = breed;
}
  
var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");

/* This prototype method will be applied to all created objects created from the Dog class. This is the best way other than trying to implement it separately for each dog object yet all dogs will have the same bark output of 'Woof' */
Dog.prototype.bark = () => {
    return 'Woof';
}

console.log(snoopy.bark());
console.log(scoobydoo.bark());
  