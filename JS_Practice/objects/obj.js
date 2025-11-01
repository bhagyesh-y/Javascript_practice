const car = {
  brand: "Mahindra",
  name: "XUV-700",
  year: 2025,
  color: "Navy_blue",
  price: 1770000,
  version: "Ax7",
  start: function () {
    console.log("Your XUV is ready to go");
  },
};
console.log(car.brand);
console.log(car.name);
car.new_price = 1850343; // adding new key to object
car.color = "Ivory_blue"; // updating key
console.log(car);
delete car.price;
console.log(car);
console.log(car.start());

// const calc = {
//   num1:2,
//   num2:4,
//   sum:function(){
//     console.log(num1+num2)
//   }
// }
// console.log(calc.sum())
console.log(
  "---------------------------------------------------------------------------------------------"
);
for (const key in car) {
  console.log(key, car[key]);
}

// 🔹 Practice Questions

// Create an object called student with properties: name, age, marks. Print all the properties.
let bhagyesh = {
  uname: "dhanu",
  age: 20,
  marks: 93,
};
console.log(bhagyesh);
console.log(bhagyesh.age);
console.log(bhagyesh.uname);
console.log(bhagyesh.marks);

// Write a program to add a new property grade to the student object and print the updated object.
bhagyesh.village = "sangli";
console.log(bhagyesh);

// Update the age of the student to 25 using dot notation.
bhagyesh.age = 25;
console.log(bhagyesh);

// Create an object book with properties title, author, and year. Use bracket notation to print the title.
book = {
  title: "Manifestation",
  auther: "Roxie Fenousi",
  year: 2020,
  color: "Orange",
};
console.log(book["title"]); // prints manifestation
// Write a program to delete the property year from the book object.
delete book.year;
console.log(book);

// Create an object calculator with two numbers and a method add() that returns their sum.
// const calc = {
//   num: 1,
//   num: 2,
//   sum: function () {
//     return num1 + num2;
//   },
// };
// console.log(calc.sum());

// Write a program that loops through an object person and prints all keys and values.
for (const key in book) {
  console.log(key, ": " + book[key]);
}
// Create a nested object user with properties:
const users = {
  uname: "user1",
  uid: 21,
  ucity: "bhandup",
  address: {
    city: "sangli",
    state: "maharashtra",
  },
};
console.log(user.address.city);

// Write a function that takes an object as input and prints only its keys.
// const obj ={
//   names:"Bhagyesh",
//   city:"sydney"
// }
// function f1(obj){
//   console.log(obj [key])
// }
// f1(obj)
// Create an objectś employee with properties name, salary, department.

// Add a method bonus() that returns 10% of salary.
employee = {
  name: "bhagyesh",
  salary: 173000,
  department: "IT",
  bonus: function () {
    return this.salary * 0.1;
  },
};
console.log(employee.bonus());

for (const key in employee) {
  console.log(key, employee[key]);
}
//
//2. Object Destructuring:
///Object destructuring allows you to extract properties from an object and assign them to variables with the same names as the properties. [1]
const person = { name: "Alice", age: 30, city: "New York" };

// Basic destructuring
const { name, age } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 30

// Renaming variables
const { name: fullName, city } = person;
console.log(fullName); // Output: Alice
console.log(city); // Output: New York

// Default values
const { occupation = "Engineer" } = person;
console.log(occupation); // Output: Engineer (since it's not in the original object)

// Nested object destructuring
const user = {
  id: 1,
  details: {
    email: "test@example.com",
    phone: "123-456-7890",
  },
};
const {
  details: { email },
} = user;
console.log(email); // Output: test@example.com

//Key Benefits of Destructuring:

//• Readability: Makes code cleaner and easier to understand by reducing repetitive access to array elements or object properties.
//• Conciseness: Reduces the amount of code needed to extract values.
//• Function Parameters: Commonly used in function parameters to directly access specific properties from an object passed as an argument.
//• Swapping Variables: Can be used for easily swapping the values of two variables without a temporary variable.

// Create an object person with properties name, age, and city. Print them.
const persons = {
  names: "bhagyesh",
  age: 24,
  city:"mumbai"
};
console.log(persons.age)

// Access the value of city from the object { name: "Bhagyesh", age: 24, city: "Sangli" }.

// Add a new property country: "India" to the person object.

// Delete the property age from an object.

// Check if the property email exists in the object using the in operator.

// 🔹 Intermediate (Iteration & Methods)

// Write a loop to print all keys of {a:1, b:2, c:3}.

// Write a loop to print all values of {a:1, b:2, c:3}.

// Convert {a:1, b:2, c:3} into an array of [["a",1], ["b",2], ["c",3]].

// Merge two objects {name:"Bhagyesh"} and {age:24} into one.

// Clone an object so changes in the new one do not affect the original.

// 🔹 Functions with Objects

// Create a function that takes an object {name:"Bhagyesh", age:24} and prints "Bhagyesh is 24 years old.".

// Use destructuring inside a function parameter to extract name and age.

// Create an object calculator with methods add, subtract, multiply, and divide.

// Write a function that counts how many properties an object has.

// 🔹 Advanced (Nested, this, prototypes)

// Access "blue" from this object:

// let obj = { colors: ["red", "green", "blue"] };

// Access "Sangli" from this nested object:

// let user = { name: "Bhagyesh", address: { city: "Sangli", state: "MH" } };

// Use object destructuring with default values to extract email from {name:"Bhagyesh"} (if missing, set default "no-email").

// Write an object method that uses this to print "Hello, my name is Bhagyesh".

// Explain the difference between Object.freeze() and Object.seal() with an example.

// Create a constructor function Person(name, age) that creates objects with name and age. Add a method to its prototype sayHello() that prints "Hi, I am <name>".
