/* 

new的作用：
1. 首先创建了一个新的空对象
2. 设置原型，将对象的原型设置为函数的prototype对象
3，让函数的this指向这个对象
4. 判断函数的返回值类型，如果是值类型，返回创建的对象，如果是引用类型，就返回这个引用类型的对象
*/

function myNew() {
  // 1. 创建空对象
  let obj = {};
  let constructor = [...arguments][0];
  let params = [...arguments].slice[1];
  // 2. 空对象的原型指向构造函数的原型
  obj.__proto__ = constructor.prototype;
  // 3. 执行构造函数的代码
  var ret = constructor.apply(obj, params)
  // 4. 判断返回值类型：
  //  如果是基本值类型，则返回创建的空对象，如果是引用类型，则返回这个引用类型的对象
  var flag = ret && ret instanceof Object;
  return flag ? ret : obj;
}