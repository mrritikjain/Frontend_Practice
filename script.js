/* Question 1 - Write a program to check whether a given number is odd or even using . */

let num = 5;

if (num % 2 === 0) {
  console.log("number is Even");
} else {
  console.log("number is odd");
}

/* Question 2 - Take a student's marks as input and print their grade using conditions:
90-100: A
80-89: B
70-79: C
60-69: D
< 60: F
 */

let marks = prompt("Enter Your Marks");
marks = Number(marks);

let grade;

if (marks >= 90 && marks <= 100) {
  grade = "A";
}
else if(marks >= 80 && marks <= 89){
  grade ="B";
} 
else if(marks >= 70 && marks <= 79){
  grade ="C";
}
else if(marks >= 60 && marks <=69){
  grade ="D";
}
else if(marks >= 90 && marks <= 100){
  grade ="E";
}
else if(marks < 60){
  grade ="F";
}
else {
  grade = "Invalid Grade";
}

console.log("Your grade is :", grade);
