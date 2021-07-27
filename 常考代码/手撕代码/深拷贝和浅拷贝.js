/*  浅拷贝
 浅拷贝是指把一个对象obj的属性值直接拷贝给另一个对象,其中包括了原始类型的值,还有引用类型的内存地址 
 */

// 方法1:原生的Object.assign(target, src)方法来实现浅拷贝
let obj = {
  name:'Lee',
  age:18,
  gf:{
    name:'Sophie',
    age:18
  }
}

let newObj = Object.assign({}, obj);
obj.gf.age = 25;

console.log(newObj);
// 注意这个方法target对象是第一个参数

// 方法2：扩展运算符（也是浅拷贝）
let obj1 = {
  name: 'Lee',
  age: 18
}
let newObj1 = {...obj}
obj1.age = 25;
console.log(newObj1); // {name: "Lee", age: 18}

// 对象里面有对象
let obj2 = {
  name: 'Lee',
  age: 18,
  gf: {
    name: 'Yjj',
    age: 18
  }
}
let newObj2 = {...obj2};
obj2.gf.age = 25;
console.log(newObj2); // {"name":"lee","age":18,"gf":{"name":"yjj","age":25}}

// 方法3：函数法
function shallowClone(obj) {
  if (!obj || typeof obj !== 'object') return;
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

//深拷贝 
// 一行代码
oldObj = {
  name: 'Nathan',
  age: 18,
  gf: {
    name: 'Yjj',
    age: 18
  }
}
let newObj3 = JSON.parse(JSON.stringify(oldObj))


// 函数
function deepClone(obj) {
  if(!obj || typeof obj !== 'object') return;
  let newObj = Array.isArray(obj) ? [] : {};
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      newObj[key]  =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}

// test
let objTest = {
  age: 1,
  jobs: {
    first: 'FE',
  },
  schools: [
    {
      name: 'shenda',
    },
    {
      name: 'shiyan',
    },
  ],
  arr: [
    [
      {
        value: '1',
      },
    ],
    [
      {
        value: '2',
      },
    ],
  ],
}
console.log(deepClone(objTest))