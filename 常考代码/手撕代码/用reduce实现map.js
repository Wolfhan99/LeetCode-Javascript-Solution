// reduce是一个累加方法,是对数组累计执行回调函数,返回最终计算结果

/* 

array.reduce(function(total, currentValue, arr){}, initialValue);

/total 必需。初始值, 或者计算结束后的返回值。
//currentValue  必需。当前元素
//currentIndex  可选。当前元素的索引
//arr   可选。当前元素所属的数组对象。
//initialValue可选。传递给函数的初始值

*/

// map是遍历数组的每一项,并执行回调函数的操作,返回一个对每一项进行操作后的数组
/* 

array.map(function (currentValue, index, arr){}, thisArgs);
//currentValue  必须。当前元素的值
//index 可选。当前元素的索引值
//arr   可选。当前元素属于的数组对象
//thisArg 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
// 如果省略了 thisArg，或者传入 null、undefined，那么回调函数的 this 为全局对象。 

*/

Array.prototype.myMap = function (fn, thisArg){
  var res = [];
  thisArg = thisArg || [];
  this.reduce(function (pre, cur, index, arr) {
    res.push(fn.call(thisArg, cur, index, arr));
  },[])
  return res;
}

var arr = [2,3,1,5];
arr.myMap(function (item, index, arr) {
  console.log(item, index, arr);
})

let res = arr.myMap(v => v ** 2);
console.log(res);
