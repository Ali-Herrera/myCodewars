//Instructions

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.


//Solutions 

function booleanToString(b){
    return b ? 'true' : 'false';
  }


  //anotha one 
  function booleanToString(b){
    return b.toString();
  }


  //anotha one

  function booleanToString(b){
    if (b === true){
      return 'true'
    }else {
      return 'false'
    }
  }