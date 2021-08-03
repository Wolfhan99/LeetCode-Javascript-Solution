/* 

输入一个整数数组，数组中有些数只出现过一次，我们称它为“唯一数”，

出现过两次或两次以上的数不是唯一数。请编写一段代码寻找出数组中第一个出现的唯一数，

输出该唯一数的下标。（如果有多个唯一数的情况，请输出第一个唯一数的下标）

如果数组中没有找到唯一数，请输出-1，作为异常下标，表示没有找到唯一数。

 */

function helper(nums) {
  let map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let i = 0; i < nums.length; i++) {
    if(!map.has(nums[i])){
      return i;
    }
  }
  return -1;

}