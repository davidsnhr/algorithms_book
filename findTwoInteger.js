function findTwoIntegers(array, target) {
    let pointerA = 0;
    let pointerB = array.length-1;
    let result = [];
   
    const orderArray = array.sort((a, b) => a - b);
    while (pointerA < orderArray.length || result.length > 0) {
     
      if (orderArray[pointerA] * orderArray[pointerB] > target) {
        pointerB = pointerB - 1;
      }
      if (orderArray[pointerA] * orderArray[pointerB] < target) {
        pointerA = pointerA + 1;
      }
      if (orderArray[pointerA] * orderArray[pointerB] === target) {
          result.push(orderArray[pointerA], orderArray[pointerB]);
          console.log(result)
        return result ;
      }
    }
    console.log(result)
    return result;
  }
  
  findTwoIntegers([2, 4, 1, 6, 5, 40, -1], 20);
  