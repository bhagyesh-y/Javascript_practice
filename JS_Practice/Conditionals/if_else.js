// syntax
// if(condn-1)
// {
// stmnt-1
// }
// else if(condn-2)
// {
// stmnt-2
// }
// else if(condn-3)
// {
// stmnt-3}
// else
// {
//     default
// }

// let num = prompt("enter a number")
// if (num==1)
// {
//     console.log("This is first")
// }
// else if(num==2)
// {
//     console.log("This is second")
// }
// else if (num==3)
// {
//     console.log("This is third")
// }
// else
// {
//     console.log("This is more than third")
// }
// ----------------------------------------------Basic-----------------------------------
// Q- write a program to check given number is odd or even
// let num = Number(prompt("enter a number"))
// if (num/2)
// {
//     console.log("User input is Even")
// }
// else
// {
// console.log("user input is Odd")
// }

// Q-Write a program to check given number is divisible by 5 & 3
// let num = Number(prompt("Enter a number"));
// if (num % 3 == 0) {
//   console.log("Hello");
// } else if (num % 5 == 0) {
//   console.log("Hiii");
// } else if (num % 3 & (num % 5 == 0)) {
//   console.log("HelloHii");
// } else {
//   console.log(num);
// }
// Q- Write a program that checks whether a number is positive, negative, or zero.
// let num = Number(prompt("Enter a number"))
// if(num>0)
// {
//   console.log("Given number is Positive")
// } else if (num<0)
// {
//   console.log("Given number is Negative")
// }else
// {
//   console.log("Given number is Zero")
// }

// Take a user’s age as input. If age ≥ 18 → print "Eligible to vote", else → "Not eligible".
// age = Number(prompt("Enter your age"))
// if (age>=18){
//   console.log("you are eligible for voting")
// } else
// {
//   console.log("Not eligible")
// }

// Ask the user for a number. If it is even, print "Even", else print "Odd".
// let num = Number(prompt("enter a number"))
// if (num/2)
// {
//     console.log("User input is Even")
// }
// else
// {
// console.log("User input is Odd")
// }

// Take a number and check if it is divisible by 5 and 11 or not.
// let num = Number(prompt("enter your number"))
// if (num%5==0){
//   console.log("Number is divisible by 5")
// } else if (num%11==0){
//   console.log("Number is divisible by 11")
// }else{
//   console.log("Number is not divisible by both 5 & 11 ")
// }

// Write a program to check whether a year is a leap year or not.
// let year = Number(prompt("Enter the year"))
// if(year%4==0){
//   console.log(year ,"is leap year")
// } else {
//   console.log("Regular year")
// }

// let sub1 = Number(prompt("Enter Marathi marks"));
// let sub2 = Number(prompt("Enter English marks"));
// let sub3 = Number(prompt("Enter History marks"));
// let sub4 = Number(prompt("Enter Geograhy marks"));
// let sub5 = Number(prompt("Enter Maths marks"));

// if (sub1 < 35 || sub2 < 35 || sub3 < 35 || sub4 < 35 || sub5 < 35) {
//   console.log("fail");
// } else {
//   let sum = sub1 + sub2 + sub3 + sub4 + sub5;
//   let avg = sum / 5;
//   alert("total marks:" + sum);
//   alert("Avg marks:" + avg);
//   if (avg > 85) {
//     console.log("O");
//   } else if (avg > 60) {
//     console.log("A");
//   } else {
//     console.log("B");
//   }
// }

// -----------------------------Intermediate-----------------------------------
// Accept three numbers and find the largest among them.
// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter second number"));
// let c = Number(prompt("Enter third number"));
// let largest;
// if (a > b) {
//   if (a > c) {
//     largest = a;
//   }
// } else if (b > c) {
//   largest = b;
// } else {
//   largest = c;
// }
// console.log("The largest number is " + largest);

// Check whether a character entered is a vowel or consonant.
// let char = prompt("Enter a letter");
// char.toLowerCase();
// if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//   console.log(char +" is vowel.");
// } else {
//   console.log(char+" is consonant.");
// }
// Take marks of a student and print the grade (A, B, C, D, F) based on score.
// let marks = Number(prompt("Enter your marks"))
// if (marks>90 && max){
//   console.log("A")
// }else if(marks>75){
//   console.log("B")
// }else if(marks>65){
//   console.log("C")
// }else if(marks>45){
//   console.log("D")
// }else{
//   console.log("F")
// }

// Input a temperature in Celsius. If >30 → print "Hot", if between 15-30 → "Pleasant", else → "Cold".
// let temp = Number(prompt("Enter the temperature"))
// if (temp>30){
//   console.log("HOT")
// } else if(temp >= 15  && temp <= 30) {
//   console.log("Pleasent")
// }else{
//   console.log("Cold")
// }

// Ask the user for a number. If it’s multiple of 3, print "Fizz", if multiple of 5, print "Buzz", if both → "FizzBuzz".
// let num = Number(prompt("Enter your number"));
// if (num % 3 == 0 && num % 5 == 0) {
//   console.log("Fizzbuzz 3 & 5");
// } else if (num % 3 == 0) {
//   console.log("Fizz 3");
// } else if (num % 5 == 0) {
//   console.log("Buzz 5");
// } else{
//   console.log("Not diisible by any ")
// }

// -----------------------------------Advance level-----------------------------------------------------------
// 🔹 Advanced Level

// Write a program to check if a person’s username and password match stored values.
// let username = "bhagyesh"
// let password =  "pass@123"

// let intuser = prompt("Enter username to check")
// let intpass = prompt("Enter password")
// if( intuser !== username && password == intpass){
//   console.log("Username not matched . Try again ")
// }else if( intuser == username && password !== intpass){
//   console.log("password is wrong.Enter carefully")
// }else if (intuser == username && password==intpass){
//   console.log(" successfully loggedIn ")
// } else{
//   console.log("Enter credentials currectly ")
// }

// Check whether a number is prime or not (using if-else).
// let prime = Number(prompt("Enter a number"))
// if(prime%prime == 0 && prime%1 == 0){
//   console.log(prime+" is prime number")
// } else{
//   console.log(prime+" is not a prime number ")
// }

// A shop gives discounts:
// If bill > 500 → 20% discount
// If bill between 200–500 → 10% discount
// Else → no discount
// Print the final bill.

// let shop = 500
// let bill = Number(prompt("Enter your bill amount"))
// if(bill> 500){
//     console.log(bill-20%)
// }else if(bill<=500 && bill>=200 ){
//     console.log()

// }

// Ask the user to enter time in 24-hour format. Convert it to AM/PM format using if-else.

// Given a person’s age, print whether they are a child (<13), teenager (13–19), adult (20–59), or senior (60+).
// age = Number(prompt("Enter your age"));
// if (age < 13) {
//   console.log("child");
// } else if (age >= 13 && age <= 19) {
//   console.log("Tennager");
// } else if (age >= 20 && age <= 59) {
//   console.log("Adult");
// } else {
//   console.log("Senior");
// }

//  Switch case

// let num = Number(prompt("Enter number"))
// switch(num){
//     case 1:
//         alert("one")
//         break
//     case 2:
//         alert("two")
//         break
//     case 3:
//         alert("three")
//         break
//     case 4:
//         alert("four")
//         break
//     case 5:
//         alert("five")
//         break
//     case 6:
//     alert("six")
//         break
//     case 7:
//     alert("seven")
//         break
//     default:
//         alert("Enter 1 to 7 only")
// }

//  let day = "Monday";
//     switch (day) {
//       case "Monday":
//         console.log("It's the start of the week.");
//         break;
//       case "Friday":
//         console.log("It's almost the weekend!");
//         break;
//       default:
//         console.log("It's a regular day.");
//     }
