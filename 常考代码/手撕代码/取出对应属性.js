const school = [
  {
    id: 9, name: 'Nathan',
    children:
    {
      id: 10, name: 'Dick',
      children:
        { id: 11, name: 'Jack', children: '' }
    }
  }
]


// 取出对应id的name? 如何取出

// console.log(...school);

let obj = school[0];


// let res = ''
function find(obj, n) {
  // if(obj instanceof Object !=='Object'){
  //   throw new TypeError('type error!')
  // }
  if (obj.id === undefined || obj.id !== n && !obj.children) return null;
  if (obj.id === n) {
    return obj.name;
  } else {
    return find(obj.children, n);
  }

}


console.log(find(obj, 10))
// let requiredName = find(obj, 10)
// console.log(requiredName);