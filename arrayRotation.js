list1 = [1, 2, 3, 4, 5, 6, 7]

list2g = [7, 1, 2, 3, 4, 5, 6]


function isRotation(arr1, arr2) {
  let sameElements = [];
  let pointerA = 0;
  let pointerB = 0;

  while (pointerA < arr1.length) {
    if(arr1.length !== arr2.length) return false
    if (arr1[pointerA] === arr2[pointerB]) {
      sameElements.push(arr2[pointerB]);
      pointerA++;
      pointerB === arr2.length ? (pointerB = 0) : pointerB++;
    } else {
      pointerB++;
    }

    if (pointerB === arr2.length && sameElements.length > 0) {
      pointerB = 0;
    } else if (pointerB === arr2.length && sameElements.length == 0) {
      return false;
    }

    if (sameElements.length === list1.length) {
      return true;
    } else if(sameElements.length > 0 && arr1[pointerA] !== arr2[pointerB]) {
        return false
    }
  }
}
console.log(isRotation(list1, list2g));
isRotation(list1, list2g);
