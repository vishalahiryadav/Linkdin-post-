//object instanceof Constructor


class Animal {}
class Dog extends Animal {}

const myDog = new Dog();

console.log(myDog instanceof Dog);      // Output: true
console.log(myDog instanceof Animal);   // Output: true
console.log(myDog instanceof Object);   // Output: true
console.log(myDog instanceof Array);    // Output: false
