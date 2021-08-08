function instanceofFunc(obj, cons) {
  // 错误判断,构造函数必需是一个function 其他的均报错
  if (typeof cons !== 'function') {
    throw new Error('instance error');
  }
  if(!obj || (typeof obj !== 'object' && typeof obj !== 'function')) return false;
  // 获取原型对象
  let proto = cons.prototype;
  // 如果obj的原型对象不是null
  while (obj.__proto__) { 
    if(obj.__proto__ === proto) return true;
    obj = obj.__proto__;
  }
  return false;
}

console.log(instanceofFunc(null, Function)) // false