function jumpingClouds(arr) {
  let jumpings = 0;
  let flagOne = 0;
  while (arr.length-1 > flagOne) {
    if (arr[flagOne + 2] !== 1) {
      flagOne = flagOne + 2;
    } else {
      flagOne++;
    }
    jumpings++;
  }
  console.log(jumpings)
  return jumpings;
}

jumpingClouds([0,0,0,0,1,0]);
jumpingClouds([0,0,1,0,0,1,0]);
