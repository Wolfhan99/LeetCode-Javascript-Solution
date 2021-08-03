# 关于Promise

ECMAScript新增的引用类型Promise，可以通过new操作符来实例化。

Promise连锁是把Promise逐个串联起来的一种编程模式。之所以可以这样做，是因为每个Promise（then、catch、finally）都会返回一个新的Promise，而这个新的Promise又有自己的实例方法。这样连缀方法可以构成所谓的Promise连锁。比如：

```javascript
let p = new Promise((resolve, reject) => {
console.log('first');
resolve();
});
p.then(() => console.log('second'))
.then(() => console.log('third'))
.then(() => console.log('fourth'));
// first
// second
// third
// fourth
```

这个实现最终执行了一连串的**同步任务**。正因为如此这种方式执行的任务没有那么有用，毕竟分别使用四个同步函数又可以做到，如：

```javascript
(() => console.log('first'))();
(() => console.log('second'))();
(() => console.log('third'))();
(() => console.log('fourth'))();
```

要真正执行异步任务，可以改写前面的例子，让每个执行器都返回一个期约实例。这样就可以让每个后续期约都等待之前的期约，也就是串行化异步任务。如：

```js
let p1 = new Promise((resolve, reject) => {
console.log('p1 executor');
setTimeout(resolve, 1000);
});
p1.then(() => new Promise((resolve, reject) => {
console.log('p2 executor');
setTimeout(resolve, 1000);
}))
.then(() => new Promise((resolve, reject) => {
console.log('p3 executor');
setTimeout(resolve, 1000);
}))
.then(() => new Promise((resolve, reject) => {
console.log('p4 executor');
setTimeout(resolve, 1000);
}));
// p1 executor（1 秒后）
// p2 executor（2 秒后）
// p3 executor（3 秒后）
// p4 executor（4 秒后）

```

把生成Promise的代码的代码提取到一个工厂函数中，就可以写成这样：

```js
function delayedResolve(str) {
  return new Promise((resolve, reject) => {
  console.log(str);
  setTimeout(resolve, 1000);
});
}
delayedResolve('p1 executor')
  .then(() => delayedResolve('p2 executor'))
  .then(() => delayedResolve('p3 executor'))
  .then(() => delayedResolve('p4 executor'))
// p1 executor（1 秒后）
// p2 executor（2 秒后）
// p3 executor（3 秒后）
// p4 executor（4 秒后）
```

then()、catch()和finally()都返回期约，所以串联这些方法也很直观。下面的例子同时
使用这3 个实例方法：

```js
let p = new Promise((resolve, reject) => {
  console.log('initial promise rejects');
  reject();
});
p.catch(() => console.log('reject handler'))
  .then(() => console.log('resolve handler'))
  .finally(() => console.log('finally handler'));
// initial promise rejects
// reject handler
// resolve handler
// finally handler  
```

## promise.all()和promise.race()
Promise类提供两个将多个期约实例组合成一个期约的静态方法：`Promise.all()`和`Promise.race()`。而合成后期约的行为取决于内部期约的行为。

* promise.all()
Promise.all()静态方法创建的Promise会在一组Promise全部解决之后在解决。这个静态方法接受一个可迭代对象，返回一个新的Promise：

```js
let p1 = Promise.all([
Promise.resolve(),
Promise.resolve()
]);
// 可迭代对象中的元素会通过Promise.resolve()转换为期约
let p2 = Promise.all([3, 4]);
// 空的可迭代对象等价于Promise.resolve()
let p3 = Promise.all([]);
// 无效的语法
let p4 = Promise.all();
// TypeError: cannot read Symbol.iterator of undefined
```

合成的Promise只会在每个包含的期约都解决之后才解决：

```js
let p = Promise.all([
  Promise.resolve(),
  new Promise((resolve, reject) => setTimeout(resolve, 1000))
]);
setTimeout(console.log, 0, p); // Promise <pending>
p.then(() => setTimeout(console.log, 0, 'all() resolved!'));
// all() resolved!（大约1秒后）
```

* promise.race()
`Promise.race()`静态方法返回一个包装期约，是一组集合中最先解决或拒绝的期约的镜像。这个
方法接收一个可迭代对象，返回一个新期约：

```js
let p1 = Promise.race([
Promise.resolve(),
Promise.resolve()
]);
// 可迭代对象中的元素会通过Promise.resolve()转换为期约
let p2 = Promise.race([3, 4]);
// 空的可迭代对象等价于new Promise(() => {})
let p3 = Promise.race([]);
// 无效的语法
let p4 = Promise.race();
// TypeError: cannot read Symbol.iterator of undefined
```

Promise.race()不会对解决或拒绝的期约区别对待。无论是解决还是拒绝，**只要是第一个落定的
期约，Promise.race()就会包装其解决值或拒绝理由并返回新期约**：

```js
// 解决先发生，超时后的拒绝被忽略
let p1 = Promise.race([
  Promise.resolve(3),
  new Promise((resolve, reject) => setTimeout(reject, 1000))
]);
setTimeout(console.log, 0, p1); // Promise <resolved>: 3
// 拒绝先发生，超时后的解决被忽略
let p2 = Promise.race([
  Promise.reject(4),
  new Promise((resolve, reject) => setTimeout(resolve, 1000))
]);
setTimeout(console.log, 0, p2); // Promise <rejected>: 4
// 迭代顺序决定了落定顺序
let p3 = Promise.race([
  Promise.resolve(5),
  Promise.resolve(6),
  Promise.resolve(7)
]);
setTimeout(console.log, 0, p3); // Promise <resolved>: 5

```

如果有一个期约拒绝，只要它是第一个落定的，就会成为拒绝合成期约的理由。之后再拒绝的期约
不会影响最终期约的拒绝理由。不过，这并不影响所有包含期约正常的拒绝操作。与Promise.all()
类似，合成的期约会静默处理所有包含期约的拒绝操作.如下：

```js
// 虽然只有第一个期约的拒绝理由会进入
// 拒绝处理程序，第二个期约的拒绝也
// 会被静默处理，不会有错误跑掉
let p = Promise.race([
  Promise.reject(3),
  new Promise((resolve, reject) => setTimeout(reject, 1000))
]);
p.catch((reason) => setTimeout(console.log, 0, reason)); // 3
// 没有未处理的错误 

```

* Promise实例一旦被创建就会被执行
* Promise过程分为两个分支，`pending=>resolved`和`pending=>rejected`
* Promise状态改变后，依然会执行之后的代码：
  
```javascript
  const warnDemo = ctx => {
    const promise = new Promise(resolve => {
        resolve(ctx);
        console.log("After resolved, but Run"); // 依然会执行这个语句
    });
    return promise;
  };
  warnDemo("ctx").then(ctx => console.log(`This is ${ctx}`));
```
