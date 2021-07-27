// 1. 借助栈的方法

let quChStack = arr => {
  let res = [];
  while(arr.length > 0){
    let item = arr.shift();
    res.indexOf(item) === -1 && res.push(item);
  }
  return res;
}
console.log(quChStack([1, 4, 5, 6, 6, 7, 7, 999, 999, 8, 7, 999]));



//  2. set方法
function quChSet(arr){
  return [...new Set(arr)]
}
console.log(quChSet([1, 2, 2, 3, 4, 4]))

// 3. indexOf() + lastIndexOf() 方法
let quChIndexOf = arr => {
  let res = [];
  arr.forEach((item, index) => {
    if(arr.indexOf(item, index) === arr.lastIndexOf(item) && res.indexOf(item) === -1){
      res.push(item);
    }
  });
  return res;
}

console.log(quChIndexOf([1, 2, 2, 3, 4, 4]))


// 4. 循环
function quChCycle(arr) {
  arr.sort((a,b) => a-b);
  let res = [];
  for(let i = 0; i<arr.length; i++){
    if(arr[i] !== arr[i-1]){
      res.push(arr[i])
    }
  }
  return res;
}

// 5.includes()方法
function quChIncludes(arr) {
  let res = [];
  arr.forEach(item=>{
    if(!res.includes(item)){
      res.push(item);
    }
  })
  return res;
}