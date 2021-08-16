/* 

Promise.any 只要传入promise有一个是fulfilled则立即resolve出去, 否则将所有的reject结果收集起来并返回AggregateError

*/

Promise.newAny = function (promises) {
  return new Promise((resolve, reject) => {
    promises = Array.isArray(promises) ? promises : [];
    let len = promises.length;
    // 用于收集所有reject
    let errs = [];
    // 如果传入的是一个空数组, 那么就直接返回AggregateError
    if (len === 0)
      return reject(new AggregateError("All promise were rejected"));
    promises.forEach((promise) => {
      promise.then(
        (value) => {
          resolve(value);
        },
        (error) => {
          len--;
          errs.push(error);
          if(len === 0){
            reject(new AggregateError(errs));
          }
        }
      );
    });
  });
};
