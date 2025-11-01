let arr = [1, 2, 3, 4, 5, 6, 8, 9];
arr.push(12);
console.log(arr);
arr.pop();
console.log(arr, "last");
arr.unshift(4, 5);
console.log(arr);
arr.shift();
console.log(arr);
arr1 = ["bhagyesh"];
console.log(arr.concat(arr1));
console.log(arr.join());
console.log(arr.slice(0, 7));
console.log(arr);
//const fruits = ["Apple","Banana","Cherry","Pineapple"]
//console.log(fruits);

//let new_fruits =fruits.splice(2,2,"Guava","Kiwi")//this returns removed elements in form of array
//console.log(new_fruits);

//console.log(fruits)// This returns new modified array.
//console.log(("apple"))
//console.log()

console.log("-------------------------------------");
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

function bhagyesh(element, index, array) {
  array[index] = element * 2;
}
numbers.forEach(bhagyesh);

console.log(numbers);

//console.log(numbers.forEach(bhagyesh))

// Using an arrow function with index
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}: ${fruit}`);
});

let norm = {};
//filter
numberss = [1, 2, 3, 4, 5, 6, 7, 9];
ṣśś;
//Destructuring in JavaScript is an expression introduced in ES6 (ECMAScript 2015) that allows for unpacking values from arrays or properties from objects into distinct variables. This simplifies extracting and using specific data without needing to access elements by index or properties by name repeatedly.
//There are two main types of destructuring:
//1. Array Destructuring:
//Array destructuring allows you to extract elements from an array and assign them to variables based on their position. [1]
//const numbers = [10, 20, 30, 40];

// Basic destructuring
const [first, second] = numbers;
console.log(first); // Output: 10
console.log(second); // Output: 20

// Skipping elements
const [, , third] = numbers;
console.log(third); // Output: 30

// Using rest parameter for remaining elements
const [a, b, ...rest] = numbers;
console.log(a); // Output: 10
console.log(b); // Output: 20
console.log(rest); // Output: [30, 40]

// Default values
const [x, y, z, w, fifth = 50] = numbers;
console.log(fifth); // Output: 50 (since it's not in the original array)
