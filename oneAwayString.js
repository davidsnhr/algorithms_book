// is_one_away('abcde', 'abcd'); // should return True
// is_one_away('abde', 'abcde'); // should return True
// is_one_away('aaa', 'abc'); // should return False
// is_one_away('abcde', 'abc'); // should return False

function is_one_away(strOne, strTwo) {
  let flagOne = 0;
  let flagTwo = 0;
  changingCounter = 0;
  strOne = strOne.split('').sort((a, b) => a - b);
  strTwo = strTwo.split('').sort((a, b) => a - b);

  if (Math.abs(strOne.length - strTwo.length) > 1) return false;

  while(strOne.length - 1  > flagOne) {
    if (strOne[flagOne] === strTwo[flagTwo]) {
      flagOne++;
      flagTwo++;
    } else {
      changingCounter++;
      flagTwo++;
    }
    if (changingCounter > 1) return false;
   
  }
  return true
}


console.log(is_one_away('abcde', 'abcd'))
console.log(is_one_away('abde', 'abcde'))
console.log(is_one_away('aaa', 'abc'))
console.log(is_one_away('abcde', 'abc'))
console.log(is_one_away('', 'abc'))
