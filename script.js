/* Question 1 - Write a program to check whether a given number is odd or even using . 

let num = 5;

if (num % 2 === 0) {
  console.log("number is Even");
} else {
  console.log("number is odd");
}

 Question 2 - Take a student's marks as input and print their grade using conditions:
90-100: A
80-89: B
70-79: C
60-69: D
< 60: F
 

let marks = prompt("Enter Your Marks");
marks = Number(marks);

let grade;

if (marks >= 90 && marks <= 100) {
  grade = "A";
} else if (marks >= 80 && marks <= 89) {
  grade = "B";
} else if (marks >= 70 && marks <= 79) {
  grade = "C";
} else if (marks >= 60 && marks <= 69) {
  grade = "D";
} else if (marks >= 90 && marks <= 100) {
  grade = "E";
} else if (marks < 60) {
  grade = "F";
} else {
  grade = "Invalid Grade";
}

console.log("Your grade is :", grade);

 Question 3 - Determine whether a given year is a leap year. 

let Year = 2000;

if (Year % 4 === 0) {
  console.log("This Year is Leap Year.");
} else {
  console.log("Not a Leap Year");
}

 Question 4 - Find the largest of three numbers using nested if statements. 

let a = prompt("Enter First Number");
let b = prompt("Enter second Number");
let c = prompt("Enter last Number");

a = Number(a);
b = Number(b);
c = Number(c);

if (a > b) {
  if (a >= c) {
    console.log("first Number is largest");
  } else {
    console.log("Last number is largest");
  }
} else {
  if (b >= c) {
    console.log("second number is largest");
  } else {
    console.log("third number is largest");
  }
}

 Question 5 - Check if a given character is a vowel or a consonant. 

ch = prompt("Enter your character");

ch = ch.toLowerCase();

if(ch==="a" || ch==="e" || ch==="i" || ch==="o" || ch==="u"){
  console.log("Given character is vowel");
}
else if(ch>="a" && ch<= "z"){
  console.log("Given character is consonant");
}

else{
  console.log("Invalid Character");
}


 Question 6 - Check if a given number is positive, negative, or zero. 


let num = prompt("Enter your number");

num =Number(num);

if(num >0){
  console.log("given number is Positive");
}
else if(num === 0){
  console.log("given number is Zero");
}
else if(num <0){
  console.log("Given Number is negative");
}
else{
  console.log("Invalid Number");
}

 Question 7 - Perform addition, subtraction, multiplication, or division based on user input (e.g., using if-else or switch).


let num1 = prompt("Enter First Number");
let num2 = prompt("Enter second Number");
let op = prompt("Enter operator (+,-,*,/)");

num1 = Number(num1);
num2 = Number(num2);

let result;

switch (op) {
  case "+":
    result = num1 + num2;
    break;

  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (nub2 === 0) {
      result = "Error : can't divide by zero";
    } else {
      result = num1 / num2;
    }
    break;
  default:
    result = "Invalid operation";
    break;
}

console.log("result :", result);


Question 8 - Take a number (1–7) as input and print the corresponding day of the week.


let day = prompt("Enter a number from 1 to 7");

switch (day) {
  case "1":
    console.log("Its Sunday.");
    break;
  case "2":
    console.log("Its Monday.");
    break;
  case "3":
    console.log("Its Tuesday.");
    break;
  case "4":
    console.log("Its Wednesday.");
    break;
  case "5":
    console.log("Its Thrusday.");
    break;
  case "6":
    console.log("Its Friday.");
    break;
  case "7":
    console.log("Its Satudray.");
    break;
  default:
    console.log("Invalid Input");
}

Question 9 - Check if a person is eligible to vote based on their age (age ≥ 18).



let age = Number(prompt("Enter Your age"));

if (age >= 18 && age <= 100) {
  console.log("You are eligible to vote.");
} else if (age >= 1 && age <= 17) {
  console.log("You are not eligible to vote.");
} else {
  console.log("Entered age is not correct.");
}

Question 10  - Determine the type of triangle (Equilateral, Isosceles, or Scalene) based on the lengths of its sides.



let a = Number(prompt("Enter side 1:"));
let b = Number(prompt("Enter side 2:"));
let c = Number(prompt("Enter side 3:"));

if (a <= 0 || b <= 0 || c <= 0) {
  console.log("Invalid input! Lengths must be positive.");
}
else if (a + b <= c || a + c <= b || b + c <= a) {
  console.log("Invalid triangle! Sum of any two sides must be greater than the third.");
}
else if (a === b && b === c) {
  console.log("Equilateral Triangle");
}
else if (a === b || b === c || a === c) {
  console.log("Isosceles Triangle");
}
else {
  console.log("Scalene Triangle");
}

Loops Questions 

Question 1 - Write a program to print the multiplication table of a given number using a loop.

let num = Number(prompt("Enter a number"));

for (let i = 1; i <= 10; i++) {
 console.log(num + " x " + i + " = " + (num * i));
}


Question 2 - Calculate the factorial of a given number using a for loop.


let num = Number(prompt("Enter a number for factorial"));
let result = 1;   // Start from 1

for (let i = 1; i <= num; i++) {
  result = result * i;  
}

console.log(result);

Question 3 - Find the sum of the first n natural numbers using a loop.

let n = Number(prompt("Enter a number:"));
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum = sum + i;
}

console.log("Sum =", sum);


Question 4 - Write a program to reverse the digits of a number using a loop.


Question 5 - Print all even numbers from 1 to 50 using a loop.

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

*/
