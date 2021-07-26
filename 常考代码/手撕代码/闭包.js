/* 
for (var i = 1; i < 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j)
    }, j * 1000);
  })(i)
  // 闭包的形式解决问题
  // 输出为1 2 3 4

} */
/* 
for (let i = 1; i < 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
} */
//输出 1,2,3,4



//let 绑定 for 循环，将其重新绑定到每一次的迭代中，保证每次迭代结束都会重新赋值
//有自己的作用域块，
//var 没有自己的作用域块，所以循环变量就会后一个覆盖前一个，循环完毕只有一个值输出；
/* for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
} */
// 输出 5,5,5,5

// 闭包的简单实现
function sum(a) {
  return function (b) {
    return a + b
  }
}

var result = sum(1)(2)
console.log(result) // 3
