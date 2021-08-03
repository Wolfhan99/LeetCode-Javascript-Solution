/* 

promiseAll存在一个问题：

只要所有的 Promise 对象中有一个被 reject，那么其他已经 resolve 的 Promise 对象们会被忽略。
所以可以使用Promise.allSettled() 方法来解决这一问题。

Promise.allSettled() 方法在 MDN 中的定义如下：

Promise.allSettled() 方法返回一个在所有给定的 promise 已被决议或被拒绝后决议的 promise，
并带有一个对象数组，每个对象表示对应的promise 结果。

思路如下：
1. 首先同样运行所有的Promise对象
2. 与Promise.all不同的是， 在有Promise被reject后，我们不会直接reject，而是记录下该reject的值和对应的状态‘reject’；
  同样地， 当Promise对象被resolve后时也不仅仅局限于该记录值，同时也会记录状态fullfilled。
  当所有的Promise对象都已决（解决或拒绝后），我们统一resolve记录了值（value）已决状态（status）的数组

*/

Promise.newAllSettled = function (promiseArr) {
  let results = [];
  return new Promise((resolve, reject) => {
    let i = 0, n = 0;
    // 运行所有的Promise
    while (n < promiseArr.length) {
      promiseArr[n].then(res => {
        results.push({ value: res, status: 'fulfilled' });
        i++;
        // 全部Promise已决，resolve
        resolve(results);
      }).catch(err => {
        // 当有Promise被reject后， 记录reject的值和状态，并且已决的Promise数量+1；
        results.push({value: err, status:'rejected'});
        i++;
        if(i === promiseArr.length){
          resolve(results);
        }
      });
      n++;
    }
  });

}