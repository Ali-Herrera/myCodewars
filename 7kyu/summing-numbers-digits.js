//Description

//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

//Solution
function sumDigits(number) {
    let sumNum = Math.abs(number).toString().split('').reduce((acc, c) => acc + +c, 0);
    
    return sumNum
  }