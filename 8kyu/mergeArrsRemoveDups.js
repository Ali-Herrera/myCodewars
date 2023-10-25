
//Instructions

//Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.


//Solution 

function mergeArrays(a, b) {
    let merged = a.concat(b)
    let sortedMerged = merged.sort((a,b) => a-b)
    let removeDups = [...new Set(sortedMerged)]
    return removeDups;
  }
  
  //one liner
  const mergeArrays = (a,b) => [... new Set(a.concat(b).sort((a,b) => a-b))]