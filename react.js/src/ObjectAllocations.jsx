// In JavaScript, there are several ways to create objects. Below are the most common methods:

// 1. Using Object Literals ({})
//  This is the simplest and most common way to create objects. 
// You define key-value pairs directly inside curly braces.

// const person = {
//   name: 'John',
//   age: 30,
//   greet: function() {
//     console.log('Hello, ' + this.name);
//   }
// };

// person.greet()

// // 2. Using the new Object() Syntax
// // This method uses the Object constructor to create a new object. 
// While this is valid, it’s less common than using object literals.

// const person = new Object();
// person.name = 'Jane';
// person.age = 25;
// person.greet = function() {
//   console.log('Hello, ' + this.name);
// };

// // 3. Using a Constructor Function
// // A constructor function allows you to create an object with shared properties 
// And methods for multiple instances.

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function() {
//     console.log('Hello, ' + this.name);
//   };
// }

// const john = new Person('John', 30);
// const jane = new Person('Jane', 25);

// // 4. Using Object.create()
// // Object.create() allows you to create a new object with a specific prototype object. 
// This is useful for setting up inheritance or creating a more flexible object structure.

// const personPrototype = {
//   greet: function() {
//     console.log('Hello, ' + this.name);
//   }
// };

// const john = Object.create(personPrototype);
// john.name = 'John';
// john.age = 30;

// // 5. Using Classes (ES6)
// // ES6 introduced class syntax, 
// which is a more structured way of defining object blueprints. 
// Classes are syntactic sugar over the existing prototype-based inheritance.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log('Hello, ' + this.name);
//   }
// }

// const john = new Person('John', 30);

// // 6. Using Factory Functions
// // Factory functions return objects 
// And are often used to create multiple instances of similar objects. 
// This pattern allows for more flexibility compared to constructor functions.

// function createPerson(name, age) {
//   return {
//     name: name,
//     age: age,
//     greet: function() {
//       console.log('Hello, ' + this.name);
//     }
//   };
// }

// const john = createPerson('John', 30);

// // 7. Using Map (for key-value pairs with more features)
// // The Map object in JavaScript can be used when you need a more advanced key-value store with features like object keys and ordering.

// const personMap = new Map();
// personMap.set('name', 'John');
// personMap.set('age', 30);
