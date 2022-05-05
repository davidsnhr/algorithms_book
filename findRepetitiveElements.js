list_a1 = [1, 3, 4, 6, 7, 9];
list_a2 = [1, 2, 4, 5, 9, 10];


list_b1 = [1, 2, 9, 10, 11, 12]
list_b2 = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15]


list_c1 = [0, 1, 2, 3, 4, 5]
list_c2 = [6, 7, 8, 9, 10, 11]

function findCommonIntegers(arr1, arr2) {
  let result = [];
  let positioOne = 0;
  let positiontwo = 0;
  while (positioOne < arr1.length) {
    if (arr1[positioOne] === arr2[positiontwo] || arr1[positioOne] === arr2[positiontwo-1]) {
      result.push(arr1[positioOne]);
      positioOne++;
      positiontwo++;
    } else if (positiontwo == arr2.length) {
      positioOne++;
      positiontwo = positioOne;
    } else if (arr1[positioOne] !== arr2[positiontwo]) positiontwo++;
  }
  console.log(result);
  return result;
}

findCommonIntegers(list_c1, list_c2)
