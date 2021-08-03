/* 
Promise.all(iterable) 方法返回一个 Promise 实例，
此实例在 iterable 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；
如果参数中 promise 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 promise 的结果。

思路如下：
1. 首先需要将输入数组中的所有Promise对象均运行起来
2. 在有Promise对象resolve之后，判断是否所有对象均已resolve，当所有Promise均被resolve后进行整体的resolve。
  此外， 当任何一个Promise对象reject以后， 直接reject

*/

Promise.newAll = function(promiseArr){
  let results = [];
  return new Promise((resolve, reject) => {
    // 判断参数类型
    if(!Array.isArray(promiseArr)){
      throw new TypeError('arguments must be an array')
    }
    let i = 0, n = 0;
    // 执行所有的promise对象
    while(n < promiseArr.length){
      promiseArr[n].then(res => {
        results[n] = res;
        i++;
        if(i === promiseArr.length){
          resolve(results);
        }
      }).catch(err => {
        reject(err);
      });
      n++;
    }
  })
}

Promise.newAll2 = function(promiseArr){
  return new Promise((resolve, reject) => {
    // 判断参数类型
    if(!Array.isArray(promiseArr)){
      throw new TypeError('arguments must be an array')
    }
    let results = [];
    let count = 0; // 记录有几个resolved
    // 执行所有的promise对象
    promiseArr.forEach((promise, index)=>{
      promise.then(res => {
        results[index] = res;
        count++;
        count === promiseArr.length && resolve(results);
      },
      error => {
        reject(error);
      })
    })
  })
}


