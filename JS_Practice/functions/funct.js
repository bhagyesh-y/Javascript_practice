// write a function in js two subtract in js
// function f2(a, b) {
//   console.log("Value of equation is ", a - b);
// }
// f2(2, 1);
// // Write a function to calculate area of circle
// let radius = Number(prompt("Enter a number"));
// let pi = 3.14;
// function areaofcircle(radius) {
//   console.log(pi * radius * radius);
// }
// areaofcircle(radius);

// 10 Practice Questions – Arrow Functions

// Write an arrow function sayHello that prints "Hello, JavaScript".
// const sayHello = () => {
//   console.log("Hello, JavaScript");
// };
// sayHello()

// Write an arrow function square(num) that returns the square of a number.
// let num = Number(prompt("Enter a number"));
// const square = (num) => {
//   console.log(num*num+" is the square of "+num )
// };
// square(num);

// Write an arrow function add(a, b) that returns the sum of two numbers.
// const add =(a,b)=> a+b
// let result = add(2,3)
// console.log(result);

// Write an arrow function isEven(num) that checks if a number is even.
let isEven=(num)=>{
  if (num % 2 ==0) {
    console.log("Number is positive") 
  }else{
    console.log("Number is negative")
  }
}
let result1=isEven(4)
console.log(result1)
// Write an arrow function max(a, b) that returns the larger number.
  let max=(a,b)=>{
    if(a>b){
      return a
    }else{
      return b
    }
  }
  let result = max(5,6)
console.log(result);

// Use an arrow function with .map() to return the cube of numbers in [1, 2, 3, 4, 5].


// Use an arrow function with .filter() to return only odd numbers from [10, 11, 12, 13, 14].

// Write an arrow function reverseString(str) that reverses a string.

// Write an arrow function countWords(sentence) that returns how many words are in a string.

// Use an arrow function inside .reduce() to find the sum of [5, 10, 15, 20].
