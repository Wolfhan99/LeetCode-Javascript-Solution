//  方法1 Array.prototype.flat()
var arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());

var arr2 = [1, 2, [3, 4, [5, 6]]]
console.log(arr2.flat());


//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
console.log(arr4.flat(Infinity));

// 方法2 使用栈
/* 
无递归数组扁平化,使用堆栈
注意:深度的控制比较低效,因为需要检查每一个值的深度
也可能在shift/unshift上进行w/o反转,但是末端的数组OPs更快
*/

function flatten(arr) {
  const stack  = [...arr];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if(Array.isArray(next)){
      // 使用push送回内层数组中的元素,不会改变原始输入
      stack.push(...next);
    }else{
      res.unshift(next)
    }
  }
  return res
}

var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]], [2, 3], 4, 5]
console.log(flatten(arr1)) // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4, 2, 3, 4, 5]

// 方法3.toString
function flattenUsingToString(arr){
  const temp = arr.toString()
  const res = arr.toString().split(",");
  // 这里注意arr存在空数组的情况要踢掉
  return result = res.filter(item => item !== "").map(Number);
}
console.log(flattenUsingToString([1,9,[2,3],[],[0,999,[66, [100,200]]]]))

// 方法4: reduce + concat + isArray + recursivity
// 使用reduce concat 和递归展开无限多层嵌套的数组

function flatDeep(arr, d=1){
  return d > 0
    ? arr.reduce(
      (acc, val) =>
        acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
        : arr.slice();
    
}


// forEach 遍历数组会自动跳过空元素
const eachFlat = (arr = [], depth = 1) => {
  const result = []; // 缓存递归结果
  // 开始递归
  (function flat(arr, depth) {
    // forEach 会自动去除数组空位
    arr.forEach((item) => {
      // 控制递归深度
      if (Array.isArray(item) && depth > 0) {
        // 递归数组
        flat(item, depth - 1)
      } else {
        // 缓存元素
        result.push(item)
      }
    })
  })(arr, depth)
  // 返回递归结果
  return result
}

// for of 循环不能去除数组空位，需要手动去除
const forFlat = (arr = [], depth = 1) => {
  const result = [];
  (function flat(arr, depth) {
    for (let item of arr) {
      if (Array.isArray(item) && depth > 0) {
        flat(item, depth - 1)
      } else {
        // 去除空元素，添加非undefined元素
        item !== void 0 && result.push(item)
      }
    }
  })(arr, depth)
  return result
}
