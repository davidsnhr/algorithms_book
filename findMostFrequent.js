function foundMostFrequent(arr) {
  let frequency = {};

  for (let i = 0; i < arr.length; i++) {
    if (frequency.hasOwnProperty(arr[i])) {
      frequency[arr[i]] ++;
    } else {
      frequency[arr[i]] = 1;
    }
  }

  let mostFrequent = frequency[Object.keys(frequency)[0]];
  //Object.keys(ahash)[0];
  let result = Object.keys(frequency)[0];

  for (const property in frequency) {
      if(mostFrequent < frequency[property]) {
        mostFrequent = frequency[property]
        result = property
    } 
  }
  
  console.log("mostFrequent", result)

  return result;
}


foundMostFrequent( [1,3,1,3,2,1,2,2,2,2] )