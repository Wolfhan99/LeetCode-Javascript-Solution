async function async1() {
  console.log('async1 start')
  await async2() // 会返回一个promise
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(function () {
  console.log('setTimeout')
}, 0)
async1()
new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})
console.log('script end')


/* 

输出：
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout

process.nextTick()要优于promise.then执行
node中存在着一个特殊的队列，即nextTick queue。这个队列中的回调执行虽然没有被表示为一个阶段，
当时这些事件却会在每一个阶段执行完毕准备进入下一个阶段时优先执行。当事件循环准备进入下一个阶段之前，
会先检查nextTick queue中是否有任务，如果有，那么会先清空这个队列。




*/