/* 

描述
获取 url 中的参数
1. 指定参数名称，返回该参数的值 或者 空字符串
2. 不指定参数名称，返回全部的参数对象 或者 {}
3. 如果存在多个同名参数，则返回数组
4. 不支持URLSearchParams方法

输入：
http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key

输出：
[1, 2, 3]


*/

function getUrlParam(sUrl, sKey) {
  const paramArr = sUrl.split("?")[1].split("#")[0].split('&'); // 取出每个参数的键值对放入数组
  const obj = {};
  paramArr.forEach(element => {
    const [key, value] = element.split('='); // 取出数组中每一项的键和值
    if (key in obj) { 
      obj[key] = [].concat(obj[key], value);
    } else {
       obj[key] = value;  // 表示第一次遍历这个元素,直接添加到对象上
  }});
  return sKey ? obj : obj[sKey] || '' // 如果该方法为一个参数,则返回对象
  // 如果为两个参数,sKey存在,则返回值和数组,否则返回空字符串
}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=2&key=3&test=4#hehe'));