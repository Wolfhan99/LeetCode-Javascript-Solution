// 对象尽量静态化，一旦定义，就不得随意添加新的属性。
// 如果添加属性不可避免，要使用Object.assign方法
// bad
const a = {};
a.x = 3;

// if reshape unavoidable
const a = {};
Object.assign(a, { x: 3 });

// good
const a = { x: null };
a.x = 3;

// 对象的属性和方法，尽量采用简介表达法，这样便于描述和书写
var ref = "some value";

// bad
const atom = {
  ref: ref,

  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom = {
  ref,

  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};

// 5.数组
// 使用扩展运算符...拷贝数组
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];

// 使用Array.from方法，将类似数组的对象转为数组
const foo = document.querySelectorAll(".foo");
const nodes = Array.from(foo);

// 6. 函数
// 立即执行函数可以写成箭头函数的形式
(() => {
  console.log("Welcome to the Internet");
})[
  // 那些使用匿名函数当作参数的场合，
  // 尽量用箭头函数代替。因为这样更简洁，而且绑定了 this。

  // bad
  (1, 2, 3)
].map(function (x) {
  return x * x;
});

// good
[1, 2, 3].map((x) => {
  return x * x;
});

// best
[1, 2, 3].map((x) => x * x);

// 箭头函数取代Function.prototype.bind，
// 不应再用 self/_this/that 绑定 this。

// bad
const self = this;
const boundMethod = function (...params) {
  return method.apply(self, params);
};

// acceptable
const boundMethod = method.bind(this);

// best
const boundMethod = (...params) => method.apply(this, params);

// 所有配置项都应该集中放在一个对象，放在最后一个参数
// 布尔值不可以直接作为参数
// bad
function divide(a, b, option = false) {}

// good
function divide(a, b, { option = false } = {}) {}

/* 

不要在函数体内使用 arguments 变量，
使用 rest 运算符（...）代替。
因为 rest 运算符显式表明你想要获取参数，
而且 arguments 是一个类似数组的对象，
而 rest 运算符可以提供一个真正的数组。

*/
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join("");
}

// good
function concatenateAll(...args) {
  return args.join("");
}

// Map结构
/* 
注意区分 Object 和 Map，只有模拟现实世界的实体对象时，才
使用 Object。
如果只是需要key: value的数据结构，使用 Map 结构。因为 Map 有内建的遍历机制。

*/

let map = new Map(arr);

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}

// 根据value 获取 key
function getKey(paramType, value, compare = (a, b) => a === b) {
  if (!Object.prototype.hasOwnProperty.call(this.paramsMap, paramType)) {
    throw new Error("Type Error");
  }
  return Object.keys(this.paramMap[paramType]).find((k) =>
    compare(this.parmaMap[paramType][k], value)
  );
}

// 8.Class
// 总是用Class，取代需要prototype的操作。因为Class的写法更简洁，便于理解

// bad
function Queue(contents = []) {
  this._queue = [...contents];
}

Queue.prototype.pop = function () {
  const value = this._queue[0];
  this._queue.splice(0, 1);
  return value;
};

// good
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }
  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}

// 使用extends实现继承，因为这样更简单，不会有破坏instanceof运算的风险
// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this._queue[0];
}

// good
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}

// 9.模块
// 首先，Module 语法是 JavaScript 模块的标准写法，坚持使用这种写法。
// 使用import取代require。

// bad
const moduleA = require('moduleA');
const func1 = moduleA.func1;
const func2 = moduleA.func2;

// good
import { func1, func2 } from 'moduleA';

// 使用exports取代module.exports
// commonJS的写法
var React = require('react');

var Breadcrumbs = React.createClass({
  render() {
    return <nav />;
  }
});

module.exports = Breadcrumbs;

// ES6的写法
import React from 'react';

class Breadcrumbs extends React.Component {
  render() {
    return <nav />;
  }
};

export default Breadcrumbs;

/* 

如果模块只有一个输出值，就使用export default，如果模块有多个输出值，就不使用export default，export default与普通的export不要同时使用。

不要在模块输入中使用通配符。因为这样可以确保你的模块之中，有一个默认输出（export default）。

*/

// bad
import * as myObject from './importModule';

// good
import myObject from './importModule';

