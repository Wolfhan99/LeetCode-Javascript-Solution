var petalsBreak = function (petals) {
  let res = 0;
  for (let petal of petals) {
    if (petal === 0) {
      continue;
    }

    if (petal % 2 == 0) {
      res += petal / 2;
    } else {
      res += (parseInt(petal / 2) + 1)
    }

  }

  return res;
}

arr = [4, 2, 1];
arr1 = [2, 3, 10];
arr2 = [0, 1];
console.log(petalsBreak(arr))
console.log(petalsBreak(arr1))
console.log(petalsBreak(arr2))
console.log('end')
