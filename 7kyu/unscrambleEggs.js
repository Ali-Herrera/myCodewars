//Description 

//Unscramble the eggs.

//The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

//Solution 

function unscrambleEggs(word){
    return word.replace(/(egg)/gi, '');
  }

  
  
  function unscrambleEggs(word){
    return word.split("egg").join("")
  }

