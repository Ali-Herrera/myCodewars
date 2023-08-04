// instructions

//In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.


//My solution 

function secondSymbol(s, symbol) {
    let i = s.indexOf(symbol)
    if (i >= 0){
      return s.indexOf(symbol, i + 1);
    }else {
      return -1
    }
  }