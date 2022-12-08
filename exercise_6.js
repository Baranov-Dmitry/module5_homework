function checkArrEqualElements(arr) {
  if (!arr.length) return;

  let equal = true;

  for (i = 1; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
      equal = false;
      break;
    }
  }

  return equal;
}

console.log(checkArrEqualElements([1, 1, 1, 1, 1, 1]));
console.log(checkArrEqualElements([1, 1, 1, 1, 1, 2]));
console.log(checkArrEqualElements([2, 1, 1, 1, 1, 1]));
