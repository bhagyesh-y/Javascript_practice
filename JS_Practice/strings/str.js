let me = "bhagyeshyadav";

console.log(me.length); //prints count of the char and it will also count if there are empty spaces

console.log(me.toUpperCase());
// uppercase will change the whole string to uppercase

console.log(me.toLowerCase());
// so as lower

console.log(me.charAt(3));
// will find the character at give index

console.log(me.slice(2, 4));
// slice will print the character from first parameter to second but it will exclude last parameter.
// If given only one parameter , it will print from that given parameter to till end .

console.log(me.replace("esh", "ashri"));
// replace will replace the characters.

console.log(me.indexOf("y"));
// indexof will print the index of given character

let newme = me.substring(0, 4);
console.log(newme);
// substring will return new string according to given parameters. If given one parameter ,
// from that one parameter to till end and if two are given

// // questions to solve
// 🔹 Beginner Level (Basics)

// Declare a string "JavaScript is awesome" and find its length.
// let str = "Javascript is awesome"
// console.log(str.length);

// Extract the first character of "Programming".
// let newstr="Promgramming"
// console.log(newstr.charAt(0));

// Convert "hello world" to uppercase.
// let newstr ="hello world"
// console.log(newstr.toUpperCase());

// Convert "I LOVE JS" to lowercase.
// let str = "I LOVE JS"
// console.log(str.toLowerCase());

// Find the index of "Script" in "JavaScript".
// let str = "JavaScript"
// console.log(str.indexOf("Script"));

// 🔹 Intermediate Level (Methods)

// Extract "World" from "Hello World" using slice().
// let neworld ="Hello World"
// console.log(neworld.slice(6));

// Extract "World" from "Hello World" using substring().
// let str = "Hello World"
// let nestr = str.substring(6)
// console.log(nestr);

// Replace "dog" with "cat" in "I have a dog".
// let animal = "I have a dog"
// let newanimal = animal.replace("dog", "cat")
// console.log(newanimal)

// Trim extra spaces from " OpenAI Rocks ".
// let ai = " OpenAI Rocks "
// console.log(ai);

// let newai = ai.trim()
// console.log(newai);

// Split "red,green,blue,yellow" into an array.
// let colors = "red,green,blue,yellow".split(",")
// console.log(colors)

// 🔹 Searching & Checking

// Check if "JavaScript" includes "Script".
// let js = "Javascript"
// console.log(js.includes("script"))

// Check if "Hello" starts with "He".
// let newstr = "Hello"
// console.log(newstr.startsWith("He"));

// Check if "Learning JS" ends with "JS".

// let newjs = "Learning JS"
// console.log(newjs.endsWith("JS"));

// Find the last occurrence of "a" in "Banana".
// let fruit = "Banana";
// console.log(fruit.lastIndexOf("a"));

// 🔹 Template Literals

// Using template literals, print:
// "My name is John and I am 25 years old." (store name and age in variables).
let john = "John";
let age = 25;
let statement = `my name is ${john} and I am ${age} years old`;
console.log(statement);

// 🔹 More Challenges

// Reverse the string "hello" using string methods + array methods.
let hello = "Hello";
let arr = hello.split("");
arr.reverse();
let reversed = arr.join("");
console.log(reversed);

// Count how many times "a" appears in "JavaScript and Java".
let str = " Javascript and Java";
let count = 0;
for (const char of str) {
  if (char === "a") {
    count++;
  }
}
console.log(count + "times a is in str");

// Extract only the last 4 characters of "OpenAIChatGPT".
let ai = "OpenAIChatGPT";
console.log(ai.slice(-4));

// Concatenate "Good" and "Morning" using + operator and concat() method.

console.log("hello".concat("", "world"));

// Replace all occurrences of "is" with "was" in "This is what it is".
let sentence = "This is what it is";
console.log(sentence.replaceAll("is", "was"));
