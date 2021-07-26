// 每次调用一个函数自动加1
// 方式1： ES5
/* 

var count = function () {
  var a = 0;
  return function () {
    console.log(++a)
  }
}()

count();
count();
count(); 

*/

