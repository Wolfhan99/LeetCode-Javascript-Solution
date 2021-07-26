/* 

forEach()方法对数组的每个元素执行一次给定的函数

arr.forEach(function(currentValue, currentIndex, arr) {}, thisArgs)
// currentValue 必需.当前元素
// currentIndex 可选. 当前元素的索引
// arr 可选.当前元素所属的数组兑现
// thisArg 可选.当执行到回调函数时,用作this的值

*/

Array.prototype._forEach = function (fn, thisArgs) {
  if (typeof fn !== 'function') throw '参数必需为函数';
  if (!Array.isArray(this)) throw '只能对数组使用forEach方法';
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    fn.call(thisArgs, arr[i], i, arr)
  }
}

//test
let arr = [1,2,3,4,5];
arr._forEach((item, index) => {
  console.log(item, index);  
})

//test thisArgs

function Counter() {
  this.sum = 0;
  this.count = 0;
}

// 因为 thisArg 参数（this）传给了 forEach()，每次调用时，它都被传给 callback 函数，作为它的 this 值。

Counter.prototype.add = function(array) {
  array._forEach(function (entry) {
    this.sum += entry;
    ++this.count;
  }, this)
  //  ^ note
}

const obj = new Counter();
obj.add([2,5,7]);

console.log(obj.count);
console.log(obj.sum);
