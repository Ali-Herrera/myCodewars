//instructions

//To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

//Solution 

var findAverage = function (nums) {
    let sum = nums.reduce((acc, c)=> acc+c,0)
    let count = nums.length
    let ave = sum/count;
    return Math.floor(ave)
  }
