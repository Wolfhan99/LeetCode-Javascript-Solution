/* 

scroll事件本身会触发页面的重新渲染，同时，scroll时间的handler又会被高频度的触发，因此事件的handler内部不应该有复杂操作
例如；DOM操作就不该放在事件处理中

针对此类高频度触发事件问题（如scroll， resize， 监听用户输入），有两种常用的解决方法，防抖和节流。

*/

//  函数抖动，在事件被触发n秒后再执行回调，如果在这n秒内事件又被触发，则重新计时
//  函数防抖的实现

function debounce(fn, wait) {
  var timer = null;

  return function () {
    var context = this,
      args = arguments;

    // 如果此时存在定时器的话，则取消之前的定时器重新计时
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // 设置定时器， 使事件间隔指定事件后执行
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

var debounceRun = debounce(function () {
  console.log(123);
}, 2000);

// window.addEventListener('mousemove', debounceRun)

// 函数节流： 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，
// 如果在同一个单位时间内某事件被触发多次，只有一次能生效。

// 实现
function throttle(fn, delay) {
  var preTime = Date.now();
  return function () {
    var nowTime = Date.now();
    if (nowTime - preTime >= delay) {
      preTime = nowTime;
      fn.apply(this, arguments);
    }
  };
}

// test
var throttleRun = throttle(() => {
  console.log("节流！");
}, 2000);

// 不停移动鼠标，控制台每隔2s就会打印输出
// div1.addEventListener('mouseover', throttleRun);
