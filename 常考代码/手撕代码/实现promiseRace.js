/* 

Promise.race() 在 MDN 中给出的定义为：

Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个 promise 解决或拒绝，返回的 promise 就会解决或拒绝。

Promise.race() 实际上相当于一个竞速过程，第一给被 resolve 或 reject 的对象会被 resolve 或 reject。

因此，只需要将上面 Promise.all 的代码进行些许的改动即可。

*/

Promise.newRace = function (promiseArr) {
  return new Promise((resolve, reject) => {
    let i = 0, n = 0;
    // 执行所有的Promise
    while(n < promiseArr.length){
      promiseArr[n].then(res => {
        // 出现第一个被resolve的直接resolve
        resolve(res);
      }).catch(err => {
        reject(err);
      });
      n++;
    }
  })
}