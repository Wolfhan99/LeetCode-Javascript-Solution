/* 

在模拟bind的实现之前，先看一下bind的使用
var obj = { a: 1 }
function bar() {
  console.log(this.a)
}
bar.bind(obj)() //here,difference
*/

/* 
bind函数虽然也能改变bar函数的this，但是改变后，函数并不会执行，只是返回一个新的函数，
想要执行就要继续调用，仔细观察第五行代码的写法
实现一个简单的bind：
*/


// 版本1： 简化，只能传一个参数
/* 

Function.prototype.myBind = function (context) {
  return () => {
    // 要用箭头函数，否则 this 指向错误
    return this.call(context)
  }
}
var obj = { a: 1 }
function bar() {
  console.log(this.a)
}
bar.myBind(obj)() 

*/

// 版本2： 多个参数
Function.prototype.myBind = function (context, ...arg1) {
  return (...arg2) => {
    // 要用箭头函数，否则 this 指向错误
    return this.call(context, ...arg1, ...arg2)
  }
}
var obj = { a: 1 }
function bar(b, c) {
  console.log(this.a + b + c)
}
bar.myBind(obj, 20, 30)()