/* 
题目描述：
有一个长度为n的字符串A（n可能很大，
即如果要分配与n相当的buffer则要考虑空间复杂度问题），
其中的字符是乱序的，请写一个简单的算法，让字符串中不包含任何连续重复的字符，
并使该字符串长度尽可能短。

限定条件：

1、只能在A上直接操作；

2、剩下的字符要保持原有的顺序不变。



*/

function removeRedundantString(str) {
  // if (str.length <= 1) return str;
  let stack = []; // 定义一个栈
  for (const c of str) {
    if (stack.length && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join('')
}


function removeDuplicate(s) {
  let now = s.length;
  let later = 1;
  while (now !== later) {
    let str1 = s.replace('aa', '').
      replace('bb', '').
      replace('cc', '').
      replace('dd', '').
      replace('ee', '').
      replace('ff', '').
      replace('gg', '').
      replace('hh', '').
      replace('ii', '').
      replace('jj', '').
      replace('kk', '').
      replace('ll', '').
      replace('mm', '').
      replace('nn', '').
      replace('oo', '').
      replace('pp', '').
      replace('qq', '').
      replace('rr', '').
      replace('ss', '').
      replace('tt', '').
      replace('uu', '').
      replace('vv', '').
      replace('ww', '').
      replace('xx', '').
      replace('yy', '').
      replace('zz', '');

    later = str1.length;

  }
  return s;
}

let str = 'abcdefggggfedcbc'
let str2 = 'aabbcd'
console.log(removeDuplicate(str));
// console.log(removeRedundantString(str2));
// console.log(removeDuplicate(s));