// --------------------------------------------------// for loop in js //--------------------------------------------------------//
// for (let i = 1; i<=10; i++){
//     console.log( i) // prints 1 to 10
// }

// print even numbers from 1 to 20
// for (let i=2; i<=20; i+=2){
//     console.log(i)
// }

//  addtion of 1 to 10
// let sum = 0
// for (let i=1; i<=10; i++){
//       (sum+=i)
// }
// console.log(sum)

// ---------------------------------------------------------- Array---------------------------------------------------------------------------//

// JavaScript provides numerous built-in methods for manipulating arrays, including:
// push(): Adds an element to the end of the array.
// pop(): Removes the last element from the array.
// unshift(): Adds an element to the beginning of the array.
// shift(): Removes the first element from the array.
// length: A property that returns the number of elements in the array.
// forEach(): Executes a provided function once for each array element.
// map(): Creates a new array with the results of calling a provided function on every element.
// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
// join(): Joins all elements of an array into a string.

// let arr = [10,20,null,30,null,40,null,50,60]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[9])

// for (let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }
// for (let i = 0; i<arr.length; i++){
//     if (arr[i]===null)
//         console.log(i)
// }

// let arr = [10,20,30,40,50,60]
// let fruits=['mango','pineapple','watermelon','muskmelon']

// console.log(arr.length) // length prints
// console.log(arr)
// arr.push(111) // push will add 111 to end of array
// console.log(arr)
// arr.unshift(222)// unshift will add 222 at the start of array
// console.log(arr)

// arr.pop() // pop will remove the last item of array
// console.log(arr)
// arr.shift()
// console.log(arr) //shift will remove first item of array

// // Splice

// arr.splice(1,2,111,222)   // splice will remove the items of given first two parametrs and add given items in place of removed items from array
// console.log("changes using splice method "+ arr)
// console.log(arr.indexOf(111))  //prints index of given element of array
// console.log(arr.includes(111)) // checks whether given element is in the array or not
// console.log(arr.includes(777)) // value returns in boolean

// for in loop in js

// for(variable in arr_name) { console.log(variable)}
// for (let index in arr) console.log(index)

// for .. of loop
// -------------------------------------------------------------------// while loop in js //--------------------------------------------------------//
// let i = 1
// while (i<=10) {
//     console.log("hello "+i);
//     i++
// }

// let i = 0
// while(i<arr.length){
//     if(arr[i]===null)
//         console.log(i)
//     i++
// }
// let i = 0
// while(i<arr.length){
//     console.log(arr[i])
//     i++
// }
// print even numbers from 1 to 20
// let i=2
// while(i<=20){
//     console.log(i)
//     i+=2
// }

// let i=1
// while (i%2){
// console.log(i)
// }

// For Loop Questions

// Print numbers from 1 to 100.

// for (let i = 1; i<=100; i++) {
//   console.log(i);
// }
// Print the multiplication table of 7.
// for (let i = 1; i<=10; i++) {
//   console.log(i*7);
// }

// Print only even numbers between 1–50.
// for (let i = 2; i<= 50; i+=2) {
//   console.log(i);
// }

// Find the sum of first 10 natural numbers.
// let sum = 0
// for (let i=1; i<=10; i++){
//          (sum+=i)
// }
// console.log(sum)

// Print the factorial of a given number.

// 🌀 While Loop Questions

// Print numbers from 1 to 10 using while.
// let i= 1
// while(i<=10){
//   console.log(i)
//    i++
// }

// Print the digits of a number in reverse order (e.g., 123 → 321).

// Find the sum of digits of a number.

// Keep asking the user to enter a number until they enter 0.
// let i = Number(prompt("Enter the number"))
// while(i!==0){
//   console.log("you entered " ,i)
//    i = Number(prompt("Enter the number"))
// }
// console.log("Loop stopped because you entered 0")

// Print the Fibonacci series up to 10 terms.

// 🌀 Do...While Loop Questions

// Print numbers from 1 to 5 using do...while.

// Take input until the user enters ‘q’ to quit.

// Print the table of any number entered by user.

// Keep adding numbers until the sum becomes greater than 100.

// Reverse a string using do...while.

// 🌀 For...Of Loop Questions (Arrays/Strings)

// Print all elements of an array ["red","green","blue"].

// Find the sum of all numbers in an array.

// Print only the vowels in a string "JavaScript".

// Double every number in an array and print new values.

// Find the largest element in an array.

// 🌀 For...In Loop Questions (Objects)

// Print all keys and values of an object {name:"Bhagyesh", age:24}.

// Count how many properties are in an object.

// Copy all properties of one object into another.

// Create an object of student marks and print only those with marks > 40.

// Convert all object keys to uppercase.For Loop Questions

// Print numbers from 1 to 100.

// Print the multiplication table of 7.

// Print only even numbers between 1–50.

// Find the sum of first 10 natural numbers.

// Print the factorial of a given number.

// 🌀 While Loop Questions

// Print numbers from 1 to 10 using while.

// Print the digits of a number in reverse order (e.g., 123 → 321).

// Find the sum of digits of a number.

// Keep asking the user to enter a number until they enter 0.

// Print the Fibonacci series up to 10 terms.

// 🌀 Do...While Loop Questions

// Print numbers from 1 to 5 using do...while.

// Take input until the user enters ‘q’ to quit.

// Print the table of any number entered by user.

// Keep adding numbers until the sum becomes greater than 100.

// Reverse a string using do...while.

// 🌀 For...Of Loop Questions (Arrays/Strings)

// Print all elements of an array ["red","green","blue"].

// Find the sum of all numbers in an array.

// Print only the vowels in a string "JavaScript".

// Double every number in an array and print new values.

// Find the largest element in an array.

// 🌀 For...In Loop Questions (Objects)

// Print all keys and values of an object {name:"Bhagyesh", age:24}.

// Count how many properties are in an object.

// Copy all properties of one object into another.

// Create an object of student marks and print only those with marks > 40.

// Convert all object keys to uppercase.For Loop Questions

// Print numbers from 1 to 100.

// Print the multiplication table of 7.

// Print only even numbers between 1–50.

// Find the sum of first 10 natural numbers.

// Print the factorial of a given number.

// 🌀 While Loop Questions

// Print numbers from 1 to 10 using while.

// Print the digits of a number in reverse order (e.g., 123 → 321).

// Find the sum of digits of a number.

// Keep asking the user to enter a number until they enter 0.

// Print the Fibonacci series up to 10 terms.

// 🌀 Do...While Loop Questions

// Print numbers from 1 to 5 using do...while.

// Take input until the user enters ‘q’ to quit.

// Print the table of any number entered by user.

// Keep adding numbers until the sum becomes greater than 100.

// Reverse a string using do...while.

// 🌀 For...Of Loop Questions (Arrays/Strings)

// Print all elements of an array ["red","green","blue"].

// Find the sum of all numbers in an array.

// Print only the vowels in a string "JavaScript".

// Double every number in an array and print new values.

// Find the largest element in an array.

// 🌀 For...In Loop Questions (Objects)

// Print all keys and values of an object {name:"Bhagyesh", age:24}.

// Count how many properties are in an object.

// Copy all properties of one object into another.

// Create an object of student marks and print only those with marks > 40.

// Convert all object keys to uppercase.
