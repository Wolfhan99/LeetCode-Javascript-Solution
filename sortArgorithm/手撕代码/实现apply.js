/* 

apply 和 call类似，只是传入的参数形式是数组形式，而不是逗号分割的参数序列
因此，借助es6提供的rest运算符，就可以很方便的实现数组和参数序列化的转化

*/

Function.prototype.myApply = function (context) {
  // console.log(this)
  const fn = Symbol('fn');
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(args);
  delete context.fn;
  return result;
}

// 测试
function test(arr) {
  console.log(arr);
  console.log(this.a, this.b);
}

test.myApply(
  {
    a: 'a',
    b: 'b',
  },
  [1, 2]
)