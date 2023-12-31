//instructions

//Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.


//Solution 

function remove (string) {
    return string.split('!').join('') + '!'; 
  }


  //Another solution 

  function remove (string) {
    let s = string.split('').filter(a => a !== '!').join('')
    return `${s}!`;  
  }