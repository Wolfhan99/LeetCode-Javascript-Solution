function helper(book, width, n) {
  res = 1;
  count = 0;
  book.sort((a, b) => b - a);
  width.sort((a, b) => b - a);
  let m = 0; // 已经选择的书本

  for (let i = 0; i < n; i++) {
    // book
    // count = map.get(i);
    if (i !== 0) {
      count = m - i;
    }
    for (let j = m; j < n; j++) {
      if (width[j] < book[i]) {
        m = j; // 遍历到这里就不能放下了，所以下次从这里开始扫描
        // map.set(i+1,count - 1);
        break;
      } else {
        // count = map.get(i)
        count += 1;
      }
    }
    res *= count;
    // count = 0;
  }
  return res;
}

book = [1, 2, 3, 4, 5, 6, 7];

width = [7, 7, 7, 7, 7, 7, 7];
// width = [2, 1, 3, 4];
console.log(helper(book, width, 7));
