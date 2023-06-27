// Description 

// Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

// Please return the gap between the first position of c and the last position of c.

// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

//Solution 

function firstToLast(str,c){
    let firstCharacter = str.indexOf(c),
        lastCharacter = str.lastIndexOf(c);
    
    return firstCharacter > -1 ? lastCharacter - firstCharacter : firstCharacter; 
    
    
  }