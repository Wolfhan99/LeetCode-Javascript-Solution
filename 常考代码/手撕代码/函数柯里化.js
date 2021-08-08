/* 

函数的柯里化：curry（又叫做部分求值）

把接受多个参数的函数变成接受一个的函数，并返回一个新的函数

实现方法：用一个闭包，返回一个函数，这个函数每次执行都会改写储存函数的数组，
当函数的参数够了之后就会执行

*/

// function add(a, b) {
//   return a + b;
// }

// ES5实现
/* function curryV1(fn, args = []) {
  // 获取函数需要的参数长度
  var length = fn.length;
  return function () {
    // 拼接得到现有的所有参数
    for (let i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    // 判断参数的长度是否已经满足函数所需参数的长度
    if (args.length >= length) {
      // 如果满足，执行函数
      return fn.apply(this, args);
    } else {
      // 如果不满足，递归返回柯里化的函数，等待参数的传入
      return curryV1.call(this, fn, args);
    }
  }
} */

// test
/* let add = curryV1((a, b, c) => a + b + c);
// 一个一个测试
console.log(add(1)(2)(3))
console.log(add(1, 2)(3))
console.log(add(1)(2, 3)) */

function curry(fn, ...args) {
  // 判断参数个数是不是等于原函数参数个数
  // 如果是，直接返回调用结果
  if ([...args].length >= fn.length) {
    return fn(...args);
  } else {
    // 如果不是，则返回一个函数
    return (...params) => {
      // 将前面传的全部参数传给curry，回到第一步的if判断，直到参数个数满足要求
      return curry(fn, ...args, ...params)
    }
  }
}
// test
let add = curry((a, b, c) => a + b + c)
// 一个一个测试
console.log(add(1)(2)(3))
console.log(add(1, 2)(3))
console.log(add(1)(2, 3))


function curryV1(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curryV1.bind(null, fn, ...args)
} 

// test
/* let add = curryV1((a,b,c) => a+b+c);
console.log(add(1)(2)(3))
console.log(add(1, 2)(3))
console.log(add(1)(2, 3)) */