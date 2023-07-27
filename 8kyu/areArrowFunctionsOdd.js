//Instructions

// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []


//My Solution 

const odds = values => values.filter(a => a % 2);

//could also do

function odds(values){
    // arrow it
    return values.filter(a => a % 2);
  }