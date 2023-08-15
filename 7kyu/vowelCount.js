
// Instructions

//Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



//Solutions 

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsCount = 0;
    let chars = str.split('');
    
    vowels.forEach(function(vowel) {
      chars.forEach(function(char){
        if(char===vowel){
          vowelsCount++;
        }
      });
    });
    return vowelsCount;
  }


  //Or

  function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }

