
//Description 

// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]


//solution 

const evenNumbers = (arr, num) => {
    return arr.filter(x => x%2 === 0).slice(-num)
  }

