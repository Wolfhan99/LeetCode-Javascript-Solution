// 实现call


/* 

var foo = {
  value: 1
}

function bar() {
  console.log(this.value);
}

bar.call(foo); 

*/

// 从上面代码的执行结果，可以看到，call首先改变了this的指向，使函数的this指向了foo，然后使bar函数执行了

/* 
总结：
1. call函数改变函数this的指向，
2. 调用函数

实现：
  为了模拟call方法，我们可以这么做：
  1. 将函数设为某个对象的属性（或者方法）
  2. 通过该对象的属性调用该函数
  3. 删除该对象上的这个属性或者方法
代码如下：
*/

Function.prototype.myCall = function (context) {
  const fn = Symbol('fn'); // 声明一个独有的Symbol属性，防止fn覆盖已有属性
  context = context || window //若没有传入对象，默认绑定window对象
  context.fn = this;  // 将函数挂载到对象的fn属性上
  const args = [...arguments].slice(1); //处理传入的参数
  const result = context.fn(...args) // 通过对象的属性调用该方法
  delete context.fn // 删除该属性
  return result;
}

// 测试
function test(arg1, arg2) {
  console.log(arg1, arg2);
  console.log(this.a, this.b);
}

test.myCall(
  {
    a: 'a',
    b: 'b'
  },
  1,
  2
)

/* 
流程：
1. 首先我们对参数 context 做了兼容处理，不传值，context 默认值为 window。
2. 然后我们将函数挂载到 context 上面,context.fn = this;
3. 处理参数，将传入 myCall 的参数截取，去除第一位，然后转为数组；
4. 调用 context.fn，此时 fn 的 this 指向 context；
5. 删除对象上的属性 delete context.fn
6. 将结果返回。

*/